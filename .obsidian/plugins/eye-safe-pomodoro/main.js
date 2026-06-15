const { Modal, Notice, Plugin, PluginSettingTab, Setting } = require("obsidian");

const DEFAULT_SETTINGS = {
  workMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  pomodorosBeforeLongBreak: 4,
  autoStartBreak: false,
  autoStartWork: false,
  alertEnabled: true,
  soundEnabled: true,
  soundVolume: 70,
  soundRepeats: 3,
  noticeEnabled: true,
};

module.exports = class EyeSafePomodoroPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.mode = "work";
    this.remainingSeconds = this.minutesToSeconds(this.settings.workMinutes);
    this.completedPomodoros = 0;
    this.intervalId = null;
    this.isRunning = false;

    this.statusBarItem = this.addStatusBarItem();
    this.statusBarItem.addClass("eye-safe-pomodoro-status");
    this.registerDomEvent(this.statusBarItem, "click", () => this.toggleTimer());
    this.registerDomEvent(this.statusBarItem, "contextmenu", (event) => {
      event.preventDefault();
      this.resetTimer();
    });

    this.addCommand({
      id: "toggle-pomodoro",
      name: "Start or pause Pomodoro",
      callback: () => this.toggleTimer(),
    });

    this.addCommand({
      id: "reset-pomodoro",
      name: "Reset Pomodoro",
      callback: () => this.resetTimer(),
    });

    this.addCommand({
      id: "next-pomodoro-session",
      name: "Skip to next Pomodoro session",
      callback: () => this.completeSession(true),
    });

    this.addSettingTab(new EyeSafePomodoroSettingTab(this.app, this));
    this.updateStatusBar();
  }

  onunload() {
    this.stopInterval();
  }

  async saveSettings() {
    await this.saveData(this.settings);
    if (!this.isRunning) {
      this.resetTimer(false);
    }
  }

  minutesToSeconds(minutes) {
    return Math.max(1, Number(minutes) || 1) * 60;
  }

  getModeMinutes(mode) {
    if (mode === "shortBreak") return this.settings.shortBreakMinutes;
    if (mode === "longBreak") return this.settings.longBreakMinutes;
    return this.settings.workMinutes;
  }

  getModeLabel() {
    if (this.mode === "shortBreak") return "Short break";
    if (this.mode === "longBreak") return "Long break";
    return "Focus";
  }

  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.intervalId = window.setInterval(() => this.tick(), 1000);
    this.updateStatusBar();
  }

  pauseTimer() {
    this.stopInterval();
    this.isRunning = false;
    this.updateStatusBar();
  }

  resetTimer(showNotice = true) {
    this.pauseTimer();
    this.mode = "work";
    this.remainingSeconds = this.minutesToSeconds(this.settings.workMinutes);
    this.updateStatusBar();
    if (showNotice) this.showNotice("Pomodoro reset.");
  }

  stopInterval() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  tick() {
    this.remainingSeconds -= 1;
    if (this.remainingSeconds <= 0) {
      this.completeSession(false);
      return;
    }

    this.updateStatusBar();
  }

  completeSession(skipped) {
    this.stopInterval();
    this.isRunning = false;

    const previousMode = this.mode;
    if (previousMode === "work") {
      this.completedPomodoros += skipped ? 0 : 1;
      const longBreakDue = this.completedPomodoros > 0
        && this.completedPomodoros % this.settings.pomodorosBeforeLongBreak === 0;
      this.mode = longBreakDue ? "longBreak" : "shortBreak";
      this.remainingSeconds = this.minutesToSeconds(this.getModeMinutes(this.mode));
      this.notifySessionEnd(
        "Focus finished",
        longBreakDue ? "Time for a long break." : "Time for a short break."
      );
      if (this.settings.autoStartBreak) this.startTimer();
    } else {
      this.mode = "work";
      this.remainingSeconds = this.minutesToSeconds(this.settings.workMinutes);
      this.notifySessionEnd("Break finished", "Time to focus.");
      if (this.settings.autoStartWork) this.startTimer();
    }

    this.updateStatusBar();
  }

  notifySessionEnd(title, message) {
    this.playChime();
    this.showNotice(`${title}: ${message}`);
    this.showAlert(title, message);
  }

  showNotice(message) {
    if (this.settings.noticeEnabled) new Notice(message);
  }

  showAlert(title, message) {
    if (this.settings.alertEnabled) {
      new EyeSafePomodoroAlertModal(this.app, this, title, message).open();
    }
  }

  playChime() {
    if (!this.settings.soundEnabled) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const context = new AudioContext();
      const repeats = Math.min(8, Math.max(1, Number(this.settings.soundRepeats) || 3));
      const volume = Math.min(1, Math.max(0.01, (Number(this.settings.soundVolume) || 70) / 100));

      for (let index = 0; index < repeats; index += 1) {
        const start = context.currentTime + index * 0.58;
        this.playTone(context, 660, start, 0.2, volume);
        this.playTone(context, 880, start + 0.22, 0.28, volume);
      }

      window.setTimeout(() => context.close(), repeats * 650 + 500);
    } catch (error) {
      console.debug("Eye Safe Pomodoro sound failed", error);
    }
  }

  playTone(context, frequency, start, duration, volume) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.16 * volume, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  updateStatusBar() {
    if (!this.statusBarItem) return;

    this.statusBarItem.setText(`${this.getModeLabel()} ${this.formatTime(this.remainingSeconds)}`);
    this.statusBarItem.toggleClass("is-running", this.isRunning);
    this.statusBarItem.setAttribute("data-eye-safe-pomodoro-mode", this.mode);
    this.statusBarItem.setAttribute(
      "aria-label",
      `${this.getModeLabel()} timer. Click to ${this.isRunning ? "pause" : "start"}. Right click to reset.`
    );
  }

  formatTime(totalSeconds) {
    const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
    const seconds = Math.max(0, totalSeconds) % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
};

class EyeSafePomodoroSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", { text: "Eye Safe Pomodoro" });

    this.addNumberSetting("Work minutes", "Focus session length.", "workMinutes", 1, 180);
    this.addNumberSetting("Short break minutes", "Break after normal sessions.", "shortBreakMinutes", 1, 60);
    this.addNumberSetting("Long break minutes", "Break after a full Pomodoro cycle.", "longBreakMinutes", 1, 120);
    this.addNumberSetting("Pomodoros before long break", "Completed focus sessions before long break.", "pomodorosBeforeLongBreak", 1, 12);

    new Setting(containerEl)
      .setName("Auto-start breaks")
      .setDesc("Start break timer when focus ends.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.autoStartBreak)
        .onChange(async (value) => {
          this.plugin.settings.autoStartBreak = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Auto-start focus")
      .setDesc("Start focus timer when break ends.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.autoStartWork)
        .onChange(async (value) => {
          this.plugin.settings.autoStartWork = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Alert dialog")
      .setDesc("Open a dialog when focus or break ends.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.alertEnabled)
        .onChange(async (value) => {
          this.plugin.settings.alertEnabled = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Sound")
      .setDesc("Play a repeated chime when focus or break ends.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.soundEnabled)
        .onChange(async (value) => {
          this.plugin.settings.soundEnabled = value;
          await this.plugin.saveSettings();
        }));

    this.addNumberSetting("Sound volume", "End-alert volume from 1 to 100.", "soundVolume", 1, 100);
    this.addNumberSetting("Sound repeats", "How many chimes play when time ends.", "soundRepeats", 1, 8);

    new Setting(containerEl)
      .setName("Test sound")
      .setDesc("Play current chime settings now.")
      .addButton((button) => button
        .setButtonText("Play")
        .onClick(() => this.plugin.playChime()));

    new Setting(containerEl)
      .setName("Test alert dialog")
      .setDesc("Open sample end-time dialog now.")
      .addButton((button) => button
        .setButtonText("Open")
        .onClick(() => this.plugin.showAlert("Timer finished", "Sample alert dialog.")));

    new Setting(containerEl)
      .setName("Notice")
      .setDesc("Show Obsidian notice when a session changes.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.noticeEnabled)
        .onChange(async (value) => {
          this.plugin.settings.noticeEnabled = value;
          await this.plugin.saveSettings();
        }));
  }

  addNumberSetting(name, description, key, min, max) {
    new Setting(this.containerEl)
      .setName(name)
      .setDesc(description)
      .addText((text) => text
        .setValue(String(this.plugin.settings[key]))
        .onChange(async (value) => {
          const parsed = Number.parseInt(value, 10);
          if (!Number.isFinite(parsed)) return;

          this.plugin.settings[key] = Math.min(max, Math.max(min, parsed));
          await this.plugin.saveSettings();
        }));
  }
}

class EyeSafePomodoroAlertModal extends Modal {
  constructor(app, plugin, title, message) {
    super(app);
    this.plugin = plugin;
    this.title = title;
    this.message = message;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("eye-safe-pomodoro-modal");

    contentEl.createEl("h2", { text: this.title });
    contentEl.createEl("p", { text: this.message });
    contentEl.createEl("div", {
      cls: "eye-safe-pomodoro-modal-time",
      text: `${this.plugin.getModeLabel()} ${this.plugin.formatTime(this.plugin.remainingSeconds)}`,
    });

    const actions = contentEl.createDiv({ cls: "eye-safe-pomodoro-modal-actions" });

    actions.createEl("button", {
      cls: "mod-cta",
      text: this.plugin.isRunning ? "Keep running" : "Start next",
    }).addEventListener("click", () => {
      if (!this.plugin.isRunning) this.plugin.startTimer();
      this.close();
    });

    actions.createEl("button", { text: "Leave paused" }).addEventListener("click", () => {
      this.plugin.pauseTimer();
      this.close();
    });

    actions.createEl("button", { text: "Reset" }).addEventListener("click", () => {
      this.plugin.resetTimer(false);
      this.close();
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}
