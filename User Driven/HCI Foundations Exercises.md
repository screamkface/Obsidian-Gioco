# **Exercise 1- Norman’s interaction cycle**

Consider a user who wants to change the privacy settings of a mobile app but cannot find where the option is.

1. Describe the user’s **goal**, **intention**, **action specification**, **execution**, **perception**, **interpretation** and **evaluation**.
2. Identify a possible **gulf of execution** and a possible **gulf of evaluation**.
3. Propose two interface improvements that reduce these gulfs.

**Answer checklist:** clear mapping from user goal to interface actions; feedback that makes the system state understandable; distinction between execution problems and evaluation problems.

# 1.
1. **User goal:** The user want to change the privacy settings of the mobile app
2. **Intention:** The user should navigate by using a bottom navigation bar to the settings and here he can find the privacy settings or can search it with a search bar on the top of the screen settings.
3. **Actions:** The users shoyld tap to the setting logo or name in the navigation widget (if present), and then the user should se all the settings and search of quickly find the privacy text.
4. **Execution:** The user may tap different menu items or scroll through several pages, but the privacy option is not clearly visible.
5. **Perception:** the user sees the settings screen but the privacy option is not immediately visible. The user may see many unrelated options, vague labels or nested menus
6. **Interpretation**: The user interprets the interface as confusing and undesrtand that privacy settings may be hidden under sub categories
7. **Evaluation**: The user evaluates that the current state of the system does not satisfy the goal, because the privacy settings have not been found or changed.

# 2. 
**Possible gulf of eexecution**: A gulf of execution occurs because the interface does not clearly show where the privacy settings are located. 

**Possible guld of evalutation:** A gulf of evaluation occurs because, after navigating through the settings, the user cannot understand whether they are in the correct section or whether the privacy settings have actually been changed.

# 3. 

**Improvements:** the app must show a navigation bar with the important navigation screens of the app including the settings. Once the user click on the settings icon on the menu/navbar he can easily reach the settings screens. The settings screen must have a readable representation grouped by type so the user can easily find the Privacy section.

---
# Exercise 2 - Slips, mistakes and lapses

Classify each case as a **slip**, **mistake** or **lapse** then propose a design prevention strategy.

1. The user intends to delete one photo but taps the adjacent delete icon by accident. 
2. The user thinks that the “archive” button permanently deletes an email. 
3. The user begins a checkout flow and forgets to apply a discount code before payment.

**Answer checklist**: slip = wrong execution of correct intention; mistake = wrong intention or mental model; lapse = memory/attention failure.


1. Slip - inattention but intention correct
2. Mistake - mental model is wrong
3. Lapse - Forget something

---

# **Exercise 3 - Abows and Beale Framework**

- **User:**  
    The user wants to deposit cash into their bank account using an ATM.
- **Input language:**  
    The input language includes the actions and commands that the user can perform on the ATM, such as inserting the card, entering the PIN, selecting “Deposit”, inserting the cash into the cash slot, confirming the amount detected by the machine, and completing the transaction.
- **System internal state:**  
    The system verifies the user’s card and PIN, switches to the deposit mode, detects and counts the inserted cash, updates the user’s account balance, and stores the transaction information.
- **Output language:**  
    The output language includes what the ATM communicates to the user, such as messages on the screen, confirmation of the detected amount, error messages, sounds, and the printed or digital receipt.
- **Possible translation problem:**  
    A translation problem can happen between the **input language** and the **system state**. For example, the user inserts €50, but the ATM detects only €40 because one banknote is not recognized correctly. In this case, the user’s intended action is not translated correctly into the system’s internal state.

---

# **Exercise 4 - Cognitive Load**

*A website asks users to remember a six-digit code from one page and type it into another page. Explain why this creates cognitive load and redesign the flow to reduce memory effort.*

The choise of using a six-digit code to remember is hitting the **Short-term memory**, the fact that the user must remember a 6 digit code maybe showed for a few seconds can lead to problems. A solution could be allow to copy the 6 digits on the clipboard or show the code in an authenticator app.

---

# **Exercise 5- From human limitation to design rule**

For each human limitation, write one interface risk and one design solution:
1. **limited short-term memory**; 
	1. Avoid forcing users to remember many codes, steps or value across screens
2. **attention split between two tasks**; 
	1. Keep the context visible, the state of the previuos page and show titles, breadcrumbs, summaries and progress indicators.
3. wrong mental model of a command;
	1. 
4. accidental motor action on a small touch target.
	1. set the ui in order to be clear and precise about the inputs

**Answer checklist**: connect memory to recognition, attention to visibility and interruption recovery, mental models to labels and feedback, motor slips to spacing, confirmation and undo.

--- 
# **Exercise 6 – Feedback and evaluation**

When the user presses “Submit” on a long online form and nothing visible happens for three seconds, the problem is on Norman’s **evaluation side** of the interaction cycle. The user has already executed the action, but the system does not provide clear feedback, so the user cannot understand whether the form is being submitted, whether the button worked, or whether an error occurred.

5. **Perceive the system state:**  
    The user cannot perceive the current system state because there is no visible change after pressing “Submit”. The interface looks the same, so the user may think that nothing happened.
    
6. **Interpret the system state:**  
    Since there is no feedback, the user may interpret the situation incorrectly. For example, they may think the website is frozen, the form was not submitted, or they need to press the button again.
    
7. **Evaluate the system state with respect to the goal:**  
    The user cannot evaluate whether their goal has been achieved, because they do not know if the form is being processed or successfully submitted. This creates uncertainty and frustration.
    

Possible forms of feedback are:

- A **loading spinner** or **progress indicator** after pressing “Submit”.
    
- A **textual message**, such as “Submitting your form...” or “Please wait”.
    
- Disabling the **Submit** button and changing its text to “Submitting...”.
    
- A small **animation** that shows the system is working.
    
- A final confirmation message, such as “Your form has been submitted successfully”.

---

# UCD and Usability

# **Exercise 1- Usability metrics**

For a ticket vending machine, define one metric for each usabilty dimension:

- **Effectiveness**: **correctness** of the machine
- **Efficiency**: *number of steps and completion time*
- **Satisfaction**: Rating scales
For each metric, specify what data you would collect and how you would interpret it.

**Answer checklist**: effectiveness often concerns task completion and correctness; efficiency concerns time/effort; satisfaction can be measured with questionnaires or rating scales.

---

# **Exercise 2- UCD lifecycle**

You are designing a university app for booking study rooms. Write a short UCD plan including

- initial user research: 
- prototype creation
- user evaluation
- redesign and iteration
Explain why this process is iterative

1. **Know your users**: Users here are university students, the want to be able to book study rooms, rooms can be free roms or other classes in the university.
2. **Involve users early and continuosly**: The MVP prototpype should be made with the help of users that need to validate the mvp functions based on their needs.
3. **Iterations**: through usabilty assesments we change the desing and so on so forth. The user evaluate the product in order to understand what is working e what doesn't. So we iterate.
The process is iterative because we are including the user in every phase, for instance we build a primary MVP and users try the application but notice that something is wrong or we can improve the quality of the functions we iterate going to the design part and rebuild the application and then the user evaluate again.

---

# **Exercise 3- UCD vs technology-driven design**

*Compare two approaches to the same problem: one team starts from available technology, another starts from users and context of use. Explain which risks are reduced by UCD and which risks still remain.*

The main risk is that the final product may be technically advanced but not actually useful, usable, or appropriate for the real context of use. 

In a **User-Centered Design** approach, instead, the team starts by studying the users, their goals, their needs, their limitations, and the context in which the product will be used. The technology is chosen later, as a way to support those needs. This reduces several risks: the risk of building the wrong product, the risk of creating an interface that users do not understand, the risk of ignoring accessibility issues, and the risk of designing features that are unnecessary or too complex.

However, UCD does not eliminate all risks. Some risks still remain, such as technical limitations, budget and time constraints, wrong interpretation of user research, conflicts between different user groups, or changes in user needs over time. Also, even if users are involved, the final solution may still fail if the implementation is poor or if the product does not fit the market or the organization’s goals.

---

# **Additional Exercise 4- Measurable usability requirement**

1. **The system should be intuitive**  
    For **first-time users**, during their **first visit to the homepage**, at least **80% of users** should be able to **find the main navigation options and identify where to start the main task** without external help, within **2 minutes**.
    
    - **User group:** first-time users
        
    - **Task context:** first use of the homepage
        
    - **Metric:** percentage of users who successfully understand and use the main navigation
        
    - **Target threshold:** at least 80% within 2 minutes
        
2. **The checkout should be fast**  
    For **registered users who have already selected a product**, the checkout process should be completed successfully in an average time of **less than 1 minute**, with a **task success rate of at least 90%**.
    
    - **User group:** registered users
        
    - **Task context:** completing checkout after selecting a product
        
    - **Metric:** average completion time and task success rate
        
    - **Target threshold:** average time under 1 minute and at least 90% successful completion
        
3. **Users should be satisfied with the recommendation flow**  
    For **users looking for a recommended product or content item**, after completing the recommendation flow, the average satisfaction score should be at least **4 out of 5** on a Likert scale.
    
    - **User group:** users searching for recommendations
        
    - **Task context:** completing the recommendation flow
        
    - **Metric:** satisfaction score on a 5-point Likert scale
        
    - **Target threshold:** average score of at least 4/5

---

# **Additional Exercise 5- Evaluation plan from UCD**

You are designing a prototype for a university canteen app. Define one user-centered iteration: research activity, prototype decision, evaluation method, data collected and redesign decision.