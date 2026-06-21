---
title: "User-Driven Software Engineering — 1000 English Flashcards"
created: "2026-06-15"
format: "Obsidian collapsed callouts"
language: "English"
---

# User-Driven Software Engineering — 1000 English Flashcards

Simple Obsidian format: each flashcard is a collapsed question callout. Open the small arrow to reveal the answer.

## Index

- [[#01 — Requirements and User Research]] — 162 cards
- [[#02 — Interaction Design and HCI Basics]] — 100 cards
- [[#03 — Evaluation Techniques and Controlled Experiments]] — 102 cards
- [[#04 — Software Architecture and Technologies]] — 137 cards
- [[#05 — SCRUM, Lifecycle, Testing and Validation]] — 113 cards
- [[#06 — Function Points and COCOMO II]] — 114 cards
- [[#07 — SysML, ISO, CMMI and Quality Models]] — 64 cards
- [[#08 — Interoperability, Data, Services and Processes]] — 90 cards
- [[#09 — Exam-Style Integrated Practice]] — 100 cards
- [[#10 — Quick Recap Cards]] — 18 cards

---

## 01 — Requirements and User Research

> [!question]- Q0001 — What is the main goal of requirements analysis?
> To understand the users, their context, their goals, the problem to solve, and the system functions before designing the solution.

> [!question]- Q0002 — What is a user requirement?
> A user requirement describes what users need to do with the system, usually in user language rather than implementation language.

> [!question]- Q0003 — What is the difference between a user requirement and a system requirement?
> A user requirement states a user need or goal; a system requirement specifies what the software must provide to satisfy that need.

> [!question]- Q0004 — What is a functional requirement?
> A functional requirement describes a service, behavior, or function that the system must provide.

> [!question]- Q0005 — What is a non-functional requirement?
> A non-functional requirement describes a quality or constraint, such as usability, performance, security, reliability, or portability.

> [!question]- Q0006 — Why should requirements be clear and precise?
> Because vague requirements are hard to implement, test, estimate, and validate with stakeholders.

> [!question]- Q0007 — What does it mean to learn about the product before collecting requirements?
> It means understanding the domain, existing product, competitors, logs, support comments, early adopters, and business constraints.

> [!question]- Q0008 — What does it mean to learn about users before collecting requirements?
> It means studying user profiles, skills, motivations, behaviors, needs, pain points, personas, and scenarios.

> [!question]- Q0009 — Why is competitor analysis useful in requirements analysis?
> It reveals strengths, weaknesses, target users, features, limitations, and opportunities for differentiation.

> [!question]- Q0010 — What is a user profile?
> A user profile is a set of data describing a group of users, including demographics, skills, education, occupation, behaviors, needs, and preferences.

> [!question]- Q0011 — What is a persona?
> A persona is a fictional but research-backed representation of a target user, built from real user data.

> [!question]- Q0012 — Why are personas useful in design?
> They promote empathy, align the team, and keep design decisions focused on real user needs and motivations.

> [!question]- Q0013 — What should an effective persona include?
> A name, age, role, goals, behaviors, motivations, pain points, relevant background, and possibly a representative quote.

> [!question]- Q0014 — What is a user scenario?
> A user scenario is a story describing how a persona behaves or completes a task in a specific context.

> [!question]- Q0015 — Why are scenarios useful?
> They help designers understand user actions, thoughts, context, practical needs, and interaction dynamics.

> [!question]- Q0016 — What is a storyboard in user-centered design?
> A storyboard is a scenario enriched with sketches or images to make the interaction context easier to understand.

> [!question]- Q0017 — What is a user story?
> A user story is a short requirement written as: As a [role], I want to [goal], so that [benefit].

> [!question]- Q0018 — What is the standard format of a user story?
> As a [user role], I want to [perform an action or achieve a goal], so that [I obtain a benefit].

> [!question]- Q0019 — What are acceptance criteria?
> Acceptance criteria are observable conditions that must be satisfied for a user story to be considered complete.

> [!question]- Q0020 — Why should user stories include a benefit?
> The benefit explains the user value and helps prioritize the story in the product backlog.

> [!question]- Q0021 — What is the role of interviews in requirements collection?
> Interviews collect detailed qualitative information about user needs, motivations, tasks, and problems.

> [!question]- Q0022 — What is the role of surveys in requirements collection?
> Surveys collect structured information from many users quickly, often using closed or scaled questions.

> [!question]- Q0023 — What is a focus group?
> A focus group is a moderated discussion with multiple participants used to explore opinions, expectations, and reactions.

> [!question]- Q0024 — What is ethnography in user research?
> Ethnography studies users in their real environment to understand work practices, context, constraints, and tacit behaviors.

> [!question]- Q0025 — What is task analysis?
> Task analysis breaks down user goals into tasks, subtasks, actions, and decisions required to complete them.

> [!question]- Q0026 — What is Hierarchical Task Analysis?
> HTA decomposes a high-level user goal into a hierarchy of tasks and subtasks, often with a plan describing their order.

> [!question]- Q0027 — Why is it useful to analyze user tasks before designing screens?
> Because screens should support real workflows rather than forcing users to adapt to arbitrary interface structure.

> [!question]- Q0028 — What is an open question in a questionnaire?
> An open question lets respondents answer in their own words, producing rich but harder-to-analyze data.

> [!question]- Q0029 — What is a closed question in a questionnaire?
> A closed question gives predefined answers, making responses easier to compare and analyze.

> [!question]- Q0030 — What is a multiple-choice question?
> A question where the respondent selects one or more options from a predefined list.

> [!question]- Q0031 — What is a scaled question?
> A question where the respondent chooses a value on a scale, such as Strongly Disagree to Strongly Agree.

> [!question]- Q0032 — What is a ranked question?
> A question where respondents order options by preference or importance.

> [!question]- Q0033 — What makes a good survey question?
> It is clear, precise, short, unbiased, relevant, and asks only one thing at a time.

> [!question]- Q0034 — Why should a questionnaire avoid leading questions?
> Leading questions push respondents toward a particular answer and bias the results.

> [!question]- Q0035 — Why should a questionnaire avoid absolute words such as always or never?
> Absolutes make answers unrealistic and reduce the precision of collected data.

> [!question]- Q0036 — Why should surveys avoid double-barreled questions?
> They ask two things at once, making the answer ambiguous and hard to interpret.

> [!question]- Q0037 — Why should predefined answers be appropriate?
> If options overlap, omit important cases, or use inconsistent categories, the collected data becomes unreliable.

> [!question]- Q0038 — Why is pilot testing a questionnaire important?
> A pilot test reveals confusing wording, missing options, layout problems, and timing issues before the real survey.

> [!question]- Q0039 — What is affinity diagramming?
> Affinity diagramming groups related notes from research into themes to reveal patterns in user behavior and needs.

> [!question]- Q0040 — What are affinity notes?
> Affinity notes are observations or findings collected during research and later grouped into meaningful themes.

> [!question]- Q0041 — Write a user story for Environmental Monitoring System focused on view real-time sensor data.
> As a environmental authority, I want to view real-time sensor data, so that I can detect unsafe air or water conditions quickly.

> [!question]- Q0042 — Give one functional requirement for Environmental Monitoring System.
> The system shall allow the environmental authority to view real-time sensor data. This describes a service the system must provide.

> [!question]- Q0043 — Give one non-functional requirement for Environmental Monitoring System.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0044 — Give one acceptance criterion for the view real-time sensor data feature in Environmental Monitoring System.
> Given a valid environmental authority, when the user requests to view real-time sensor data, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0045 — What user research method would be suitable for Environmental Monitoring System and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0046 — What would a scenario for Environmental Monitoring System help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0047 — Write a user story for Smart Urban Parking Management System focused on find and reserve an available parking space.
> As a driver, I want to find and reserve an available parking space, so that I can reduce time wasted searching for parking.

> [!question]- Q0048 — Give one functional requirement for Smart Urban Parking Management System.
> The system shall allow the driver to find and reserve an available parking space. This describes a service the system must provide.

> [!question]- Q0049 — Give one non-functional requirement for Smart Urban Parking Management System.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0050 — Give one acceptance criterion for the find and reserve an available parking space feature in Smart Urban Parking Management System.
> Given a valid driver, when the user requests to find and reserve an available parking space, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0051 — What user research method would be suitable for Smart Urban Parking Management System and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0052 — What would a scenario for Smart Urban Parking Management System help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0053 — Write a user story for Smart Health and Wellness System focused on monitor vital parameters and trends.
> As a user, I want to monitor vital parameters and trends, so that I can improve personal health decisions.

> [!question]- Q0054 — Give one functional requirement for Smart Health and Wellness System.
> The system shall allow the user to monitor vital parameters and trends. This describes a service the system must provide.

> [!question]- Q0055 — Give one non-functional requirement for Smart Health and Wellness System.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0056 — Give one acceptance criterion for the monitor vital parameters and trends feature in Smart Health and Wellness System.
> Given a valid user, when the user requests to monitor vital parameters and trends, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0057 — What user research method would be suitable for Smart Health and Wellness System and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0058 — What would a scenario for Smart Health and Wellness System help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0059 — Write a user story for BikeWare focused on record and analyze ride data.
> As a competitive bike rider, I want to record and analyze ride data, so that I can track performance over time.

> [!question]- Q0060 — Give one functional requirement for BikeWare.
> The system shall allow the competitive bike rider to record and analyze ride data. This describes a service the system must provide.

> [!question]- Q0061 — Give one non-functional requirement for BikeWare.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0062 — Give one acceptance criterion for the record and analyze ride data feature in BikeWare.
> Given a valid competitive bike rider, when the user requests to record and analyze ride data, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0063 — What user research method would be suitable for BikeWare and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0064 — What would a scenario for BikeWare help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0065 — Write a user story for Contact Tracing App focused on insert a confirmed positive case.
> As a healthcare operator, I want to insert a confirmed positive case, so that I can notify exposed users in a controlled way.

> [!question]- Q0066 — Give one functional requirement for Contact Tracing App.
> The system shall allow the healthcare operator to insert a confirmed positive case. This describes a service the system must provide.

> [!question]- Q0067 — Give one non-functional requirement for Contact Tracing App.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0068 — Give one acceptance criterion for the insert a confirmed positive case feature in Contact Tracing App.
> Given a valid healthcare operator, when the user requests to insert a confirmed positive case, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0069 — What user research method would be suitable for Contact Tracing App and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0070 — What would a scenario for Contact Tracing App help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0071 — Write a user story for Movie Group Decision App focused on rate daily movie suggestions.
> As a group member, I want to rate daily movie suggestions, so that I can build a fair shared shortlist for movie night.

> [!question]- Q0072 — Give one functional requirement for Movie Group Decision App.
> The system shall allow the group member to rate daily movie suggestions. This describes a service the system must provide.

> [!question]- Q0073 — Give one non-functional requirement for Movie Group Decision App.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0074 — Give one acceptance criterion for the rate daily movie suggestions feature in Movie Group Decision App.
> Given a valid group member, when the user requests to rate daily movie suggestions, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0075 — What user research method would be suitable for Movie Group Decision App and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0076 — What would a scenario for Movie Group Decision App help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0077 — Write a user story for University Portal focused on book an exam session.
> As a student, I want to book an exam session, so that I can manage academic activities without going to the office.

> [!question]- Q0078 — Give one functional requirement for University Portal.
> The system shall allow the student to book an exam session. This describes a service the system must provide.

> [!question]- Q0079 — Give one non-functional requirement for University Portal.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0080 — Give one acceptance criterion for the book an exam session feature in University Portal.
> Given a valid student, when the user requests to book an exam session, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0081 — What user research method would be suitable for University Portal and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0082 — What would a scenario for University Portal help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0083 — Write a user story for Gym Management App focused on book a training session.
> As a gym member, I want to book a training session, so that I can avoid overcrowding and plan workouts.

> [!question]- Q0084 — Give one functional requirement for Gym Management App.
> The system shall allow the gym member to book a training session. This describes a service the system must provide.

> [!question]- Q0085 — Give one non-functional requirement for Gym Management App.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0086 — Give one acceptance criterion for the book a training session feature in Gym Management App.
> Given a valid gym member, when the user requests to book a training session, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0087 — What user research method would be suitable for Gym Management App and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0088 — What would a scenario for Gym Management App help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0089 — Write a user story for E-learning Platform focused on publish learning material and assignments.
> As a teacher, I want to publish learning material and assignments, so that I can support students remotely.

> [!question]- Q0090 — Give one functional requirement for E-learning Platform.
> The system shall allow the teacher to publish learning material and assignments. This describes a service the system must provide.

> [!question]- Q0091 — Give one non-functional requirement for E-learning Platform.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0092 — Give one acceptance criterion for the publish learning material and assignments feature in E-learning Platform.
> Given a valid teacher, when the user requests to publish learning material and assignments, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0093 — What user research method would be suitable for E-learning Platform and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0094 — What would a scenario for E-learning Platform help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0095 — Write a user story for Food Delivery Platform focused on track an order in real time.
> As a customer, I want to track an order in real time, so that I can know when the delivery will arrive.

> [!question]- Q0096 — Give one functional requirement for Food Delivery Platform.
> The system shall allow the customer to track an order in real time. This describes a service the system must provide.

> [!question]- Q0097 — Give one non-functional requirement for Food Delivery Platform.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0098 — Give one acceptance criterion for the track an order in real time feature in Food Delivery Platform.
> Given a valid customer, when the user requests to track an order in real time, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0099 — What user research method would be suitable for Food Delivery Platform and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0100 — What would a scenario for Food Delivery Platform help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0101 — Write a user story for Smart Home Energy System focused on monitor energy consumption.
> As a homeowner, I want to monitor energy consumption, so that I can reduce waste and cost.

> [!question]- Q0102 — Give one functional requirement for Smart Home Energy System.
> The system shall allow the homeowner to monitor energy consumption. This describes a service the system must provide.

> [!question]- Q0103 — Give one non-functional requirement for Smart Home Energy System.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0104 — Give one acceptance criterion for the monitor energy consumption feature in Smart Home Energy System.
> Given a valid homeowner, when the user requests to monitor energy consumption, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0105 — What user research method would be suitable for Smart Home Energy System and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0106 — What would a scenario for Smart Home Energy System help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0107 — Write a user story for Library Management System focused on manage loans and returns.
> As a librarian, I want to manage loans and returns, so that I can keep the catalog accurate.

> [!question]- Q0108 — Give one functional requirement for Library Management System.
> The system shall allow the librarian to manage loans and returns. This describes a service the system must provide.

> [!question]- Q0109 — Give one non-functional requirement for Library Management System.
> The system should provide a clear, responsive, and secure interface, so that users can complete the main task reliably.

> [!question]- Q0110 — Give one acceptance criterion for the manage loans and returns feature in Library Management System.
> Given a valid librarian, when the user requests to manage loans and returns, then the system completes the action and shows a clear confirmation or error message.

> [!question]- Q0111 — What user research method would be suitable for Library Management System and why?
> Interviews and questionnaires are suitable: interviews reveal detailed needs, while questionnaires validate priorities across a larger user group.

> [!question]- Q0112 — What would a scenario for Library Management System help designers understand?
> It would show the user context, the task flow, the user's thoughts, constraints, and the moments where the system must support the decision.

> [!question]- Q0113 — When should you use interview in requirements analysis?
> Use interview when the goal is deep qualitative understanding. Remember: it gives rich explanations but usually involves fewer participants.

> [!question]- Q0114 — What is one limitation of interview?
> Its limitation is that it gives rich explanations but usually involves fewer participants.

> [!question]- Q0115 — When should you use questionnaire in requirements analysis?
> Use questionnaire when the goal is collecting structured answers from many users. Remember: it is fast to analyze but may miss detailed motivations.

> [!question]- Q0116 — What is one limitation of questionnaire?
> Its limitation is that it is fast to analyze but may miss detailed motivations.

> [!question]- Q0117 — When should you use focus group in requirements analysis?
> Use focus group when the goal is exploring opinions and disagreements. Remember: participants can influence each other.

> [!question]- Q0118 — What is one limitation of focus group?
> Its limitation is that participants can influence each other.

> [!question]- Q0119 — When should you use ethnography in requirements analysis?
> Use ethnography when the goal is understanding real behavior in context. Remember: it is time-consuming but reveals hidden work practices.

> [!question]- Q0120 — What is one limitation of ethnography?
> Its limitation is that it is time-consuming but reveals hidden work practices.

> [!question]- Q0121 — When should you use card sorting in requirements analysis?
> Use card sorting when the goal is understanding how users group information. Remember: it helps define navigation and information architecture.

> [!question]- Q0122 — What is one limitation of card sorting?
> Its limitation is that it helps define navigation and information architecture.

> [!question]- Q0123 — When should you use task analysis in requirements analysis?
> Use task analysis when the goal is understanding how users complete goals. Remember: it helps design workflows and screen sequences.

> [!question]- Q0124 — What is one limitation of task analysis?
> Its limitation is that it helps design workflows and screen sequences.

> [!question]- Q0125 — When should you use competitor analysis in requirements analysis?
> Use competitor analysis when the goal is understanding the market and existing solutions. Remember: it reveals opportunities and expected features.

> [!question]- Q0126 — What is one limitation of competitor analysis?
> Its limitation is that it reveals opportunities and expected features.

> [!question]- Q0127 — When should you use log analysis in requirements analysis?
> Use log analysis when the goal is understanding actual system usage. Remember: it is objective but does not explain user motivation.

> [!question]- Q0128 — What is one limitation of log analysis?
> Its limitation is that it is objective but does not explain user motivation.

> [!question]- Q0129 — Improve this questionnaire item: 'How short was Napoleon?'
> Better version: 'How would you describe Napoleon's height?' The original question is leading and biased.

> [!question]- Q0130 — Improve this questionnaire item: 'Do you always eat breakfast?'
> Better version: 'How many days per week do you usually eat breakfast?' The original question uses an absolute word and forces a yes/no answer.

> [!question]- Q0131 — Improve this questionnaire item: 'I feel welcomed by staff and other users.'
> Better version: 'I feel welcomed by staff. / I feel welcomed by other users.' The original statement asks two things at once.

> [!question]- Q0132 — Improve this questionnaire item: 'Do you own a tablet PC?'
> Better version: 'Do you own a tablet, such as an iPad or Android tablet?' The original question may be unclear for some respondents.

> [!question]- Q0133 — Improve this questionnaire item: 'Do you like our excellent new app?'
> Better version: 'How satisfied are you with the new app?' The original question is biased because it praises the app.

> [!question]- Q0134 — Improve this questionnaire item: 'Was the interface fast and easy to use?'
> Better version: 'Was the interface fast? / Was the interface easy to use?' The original question combines two different concepts.

> [!question]- Q0135 — Improve this questionnaire item: 'Which feature is best: recommendations, notifications, or reports?'
> Better version: 'Please rank recommendations, notifications, and reports by usefulness.' If the goal is preference order, a ranking question is more appropriate.

> [!question]- Q0136 — Improve this questionnaire item: 'Did you hear about us from your spouse or friend?'
> Better version: 'How did you first hear about us?' The original options overlap because a spouse can also be a friend or relative.

> [!question]- Q0137 — Improve this questionnaire item: 'How much do you hate waiting for parking?'
> Better version: 'How frustrating is waiting for parking?' The original question is emotionally loaded.

> [!question]- Q0138 — Improve this questionnaire item: 'Do you use the system often?'
> Better version: 'How many times per week do you use the system?' The original question is vague because 'often' has no precise meaning.

> [!question]- Q0139 — How can the requirement 'authentication' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0140 — Why should 'authentication' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0141 — How can the requirement 'notification management' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0142 — Why should 'notification management' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0143 — How can the requirement 'report generation' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0144 — Why should 'report generation' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0145 — How can the requirement 'data export' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0146 — Why should 'data export' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0147 — How can the requirement 'profile management' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0148 — Why should 'profile management' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0149 — How can the requirement 'search and filtering' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0150 — Why should 'search and filtering' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0151 — How can the requirement 'dashboard visualization' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0152 — Why should 'dashboard visualization' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0153 — How can the requirement 'admin user management' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0154 — Why should 'admin user management' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0155 — How can the requirement 'sensor integration' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0156 — Why should 'sensor integration' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0157 — How can the requirement 'payment processing' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0158 — Why should 'payment processing' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0159 — How can the requirement 'booking management' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0160 — Why should 'booking management' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

> [!question]- Q0161 — How can the requirement 'recommendation generation' be made more testable?
> Rewrite it with observable behavior, input conditions, expected output, and acceptance criteria instead of vague wording.

> [!question]- Q0162 — Why should 'recommendation generation' be placed in the product backlog?
> Because it represents user or business value that can be prioritized, refined, estimated, implemented, and tested during sprints.

## 02 — Interaction Design and HCI Basics

> [!question]- Q0163 — What is design in interaction design?
> Design means achieving goals within constraints while making appropriate trade-offs.

> [!question]- Q0164 — What are design goals?
> Design goals define who the product is for and why users need it.

> [!question]- Q0165 — What are design constraints?
> Constraints are limits such as platform, technology, time, cost, user skills, materials, or organizational rules.

> [!question]- Q0166 — What is a design trade-off?
> A trade-off is a decision where improving one aspect may reduce another, such as simplicity versus advanced functionality.

> [!question]- Q0167 — What is the golden rule of design?
> Understand your materials: computers, people, their limitations, and their interaction.

> [!question]- Q0168 — Why must designers understand people?
> Because users have cognitive limits, social contexts, expectations, habits, and can make errors.

> [!question]- Q0169 — Why must designers understand computers?
> Because software has technical constraints, platform limits, performance issues, and available interaction tools.

> [!question]- Q0170 — What is the basic design process?
> Analyze what is wanted, design, prototype, evaluate, implement, deploy, and iterate.

> [!question]- Q0171 — Why is iteration important in interaction design?
> Because designers rarely get the interface right the first time; prototypes and feedback reveal improvements.

> [!question]- Q0172 — What is a prototype?
> A prototype is an early representation of a system used to explore, communicate, test, and refine design ideas.

> [!question]- Q0173 — What is low-fidelity prototyping?
> A rough prototype, often paper-based or simple wireframes, used to explore ideas quickly and cheaply.

> [!question]- Q0174 — What is high-fidelity prototyping?
> A realistic prototype closer to the final interface, used to test detailed interaction and visual design.

> [!question]- Q0175 — What is navigation design?
> Navigation design defines how users move through screens, sections, functions, and information in a system.

> [!question]- Q0176 — What is local structure in navigation?
> Local structure concerns how information and actions are organized within a single screen.

> [!question]- Q0177 — What is global structure in navigation?
> Global structure concerns how screens or sections are organized across the whole application.

> [!question]- Q0178 — What is a hierarchical navigation structure?
> A structure where screens are organized in levels, from broad categories to more specific pages.

> [!question]- Q0179 — What is a network diagram in interaction design?
> A diagram showing what screen or state leads to what, including branches and task-oriented flows.

> [!question]- Q0180 — What is dialogue in HCI?
> Dialogue is the pattern of interaction between the user and the system across screens, commands, and responses.

> [!question]- Q0181 — What are the four golden rules of navigation?
> Users should know where they are, what they can do, where they are going, and where they have been.

> [!question]- Q0182 — What problem do breadcrumbs solve?
> Breadcrumbs show the user's path in a hierarchy and provide links to higher levels.

> [!question]- Q0183 — What is the big button trap?
> It is the risk of using large buttons with vague labels, forcing users to guess what each button means.

> [!question]- Q0184 — What is screen layout?
> Screen layout is the arrangement of information, controls, groups, alignment, and space on a screen.

> [!question]- Q0185 — What does 'form follows function' mean?
> The visual structure of the interface should support what the user is trying to do.

> [!question]- Q0186 — Why should logically related items be physically grouped?
> Because grouping helps users understand relationships and scan the screen faster.

> [!question]- Q0187 — Why is alignment important?
> Alignment makes information easier to scan, compare, and read with less visual effort.

> [!question]- Q0188 — How should text usually be aligned in English and European languages?
> Text is usually left-aligned because users scan from left to right.

> [!question]- Q0189 — How should decimal numbers be aligned?
> Decimal numbers should usually be aligned by decimal point to make comparison easier.

> [!question]- Q0190 — What is the role of white space?
> White space separates, structures, and highlights information without adding visual clutter.

> [!question]- Q0191 — Why should designers avoid too many fonts or decorations?
> Too many visual styles reduce readability and make the interface look inconsistent.

> [!question]- Q0192 — What is visual hierarchy?
> Visual hierarchy makes important elements more noticeable through size, position, spacing, contrast, or grouping.

> [!question]- Q0193 — What is affordance?
> An affordance is a perceived property of an object that suggests how it can be used.

> [!question]- Q0194 — What is feedback in interaction design?
> Feedback is the system response that tells users what happened after an action.

> [!question]- Q0195 — What is mapping?
> Mapping is the relationship between controls and their effects, such as a button clearly corresponding to an action.

> [!question]- Q0196 — What is consistency in UI design?
> Consistency means similar actions, controls, labels, and patterns behave similarly across the interface.

> [!question]- Q0197 — What is error prevention?
> Error prevention means designing the interface to reduce the chance of user mistakes before they happen.

> [!question]- Q0198 — What is error recovery?
> Error recovery means helping users understand, correct, or undo mistakes after they happen.

> [!question]- Q0199 — What is discoverability?
> Discoverability is how easily users can find available actions and features.

> [!question]- Q0200 — What is the gulf of execution?
> The gap between what the user wants to do and the actions the interface makes available.

> [!question]- Q0201 — What is the gulf of evaluation?
> The gap between the system state and the user's ability to perceive and understand it.

> [!question]- Q0202 — What are the stages of Norman's interaction cycle?
> Goal, intention, action specification, execution, perception, interpretation, and evaluation.

> [!question]- Q0203 — How would you improve the layout of a settings page?
> Use clear grouping: group account options, privacy options, notifications, and support into separate sections. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0204 — What navigation risk should be avoided in a settings page?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0205 — What feedback should a settings page provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0206 — How would you improve the layout of a checkout form?
> Use clear grouping: group billing, delivery, payment, and order summary information clearly. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0207 — What navigation risk should be avoided in a checkout form?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0208 — What feedback should a checkout form provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0209 — How would you improve the layout of a dashboard?
> Use clear grouping: put the most important status indicators and alerts at the top. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0210 — What navigation risk should be avoided in a dashboard?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0211 — What feedback should a dashboard provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0212 — How would you improve the layout of a search page?
> Use clear grouping: place search input, filters, results, and sorting controls in predictable positions. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0213 — What navigation risk should be avoided in a search page?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0214 — What feedback should a search page provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0215 — How would you improve the layout of an admin panel?
> Use clear grouping: separate monitoring, user management, configuration, and reports. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0216 — What navigation risk should be avoided in an admin panel?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0217 — What feedback should an admin panel provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0218 — How would you improve the layout of a mobile booking screen?
> Use clear grouping: show date, available slots, price, and confirmation action clearly. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0219 — What navigation risk should be avoided in a mobile booking screen?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0220 — What feedback should a mobile booking screen provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0221 — How would you improve the layout of a health monitoring screen?
> Use clear grouping: show current values, trend charts, alerts, and goal progress separately. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0222 — What navigation risk should be avoided in a health monitoring screen?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0223 — What feedback should a health monitoring screen provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0224 — How would you improve the layout of a parking app screen?
> Use clear grouping: show nearby spaces, price, distance, availability, and reservation action. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0225 — What navigation risk should be avoided in a parking app screen?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0226 — What feedback should a parking app screen provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0227 — How would you improve the layout of a movie recommendation screen?
> Use clear grouping: show title, poster, key metadata, and quick feedback actions. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0228 — What navigation risk should be avoided in a movie recommendation screen?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0229 — What feedback should a movie recommendation screen provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0230 — How would you improve the layout of a sensor monitoring screen?
> Use clear grouping: show real-time status, location, metric value, and alert threshold. Keep labels short, align elements, and use white space to separate sections.

> [!question]- Q0231 — What navigation risk should be avoided in a sensor monitoring screen?
> Avoid hiding essential actions too deeply. Users should know where they are, what they can do, and what will happen next.

> [!question]- Q0232 — What feedback should a sensor monitoring screen provide after a user action?
> It should confirm the action, show the new system state, and provide a clear error or undo option if needed.

> [!question]- Q0233 — Apply Norman's cycle to a user who wants to change privacy settings: what is the intention?
> The intention is to find the settings area and open privacy options in order to achieve the user's goal.

> [!question]- Q0234 — For the task 'change privacy settings', give one possible gulf of execution.
> A possible gulf of execution is: unclear location of privacy settings. The user cannot easily translate the goal into interface actions.

> [!question]- Q0235 — For the task 'change privacy settings', give one possible gulf of evaluation.
> A possible gulf of evaluation is: no confirmation that the privacy setting changed. The user cannot easily understand the system state after acting.

> [!question]- Q0236 — How can the interface reduce gulfs for 'change privacy settings'?
> Use clearer labels, visible controls, step-by-step guidance, immediate feedback, and confirmation messages.

> [!question]- Q0237 — Apply Norman's cycle to a user who wants to reserve a parking space: what is the intention?
> The intention is to select a space and confirm a time slot in order to achieve the user's goal.

> [!question]- Q0238 — For the task 'reserve a parking space', give one possible gulf of execution.
> A possible gulf of execution is: unclear reserve button or missing time selection. The user cannot easily translate the goal into interface actions.

> [!question]- Q0239 — For the task 'reserve a parking space', give one possible gulf of evaluation.
> A possible gulf of evaluation is: no clear confirmation of the reservation. The user cannot easily understand the system state after acting.

> [!question]- Q0240 — How can the interface reduce gulfs for 'reserve a parking space'?
> Use clearer labels, visible controls, step-by-step guidance, immediate feedback, and confirmation messages.

> [!question]- Q0241 — Apply Norman's cycle to a user who wants to set a health reminder: what is the intention?
> The intention is to choose reminder type, time, and notification channel in order to achieve the user's goal.

> [!question]- Q0242 — For the task 'set a health reminder', give one possible gulf of execution.
> A possible gulf of execution is: hidden reminder controls. The user cannot easily translate the goal into interface actions.

> [!question]- Q0243 — For the task 'set a health reminder', give one possible gulf of evaluation.
> A possible gulf of evaluation is: unclear whether the reminder is active. The user cannot easily understand the system state after acting.

> [!question]- Q0244 — How can the interface reduce gulfs for 'set a health reminder'?
> Use clearer labels, visible controls, step-by-step guidance, immediate feedback, and confirmation messages.

> [!question]- Q0245 — Apply Norman's cycle to a user who wants to export a report: what is the intention?
> The intention is to select data, format, and export action in order to achieve the user's goal.

> [!question]- Q0246 — For the task 'export a report', give one possible gulf of execution.
> A possible gulf of execution is: export options are hard to find. The user cannot easily translate the goal into interface actions.

> [!question]- Q0247 — For the task 'export a report', give one possible gulf of evaluation.
> A possible gulf of evaluation is: download status is not visible. The user cannot easily understand the system state after acting.

> [!question]- Q0248 — How can the interface reduce gulfs for 'export a report'?
> Use clearer labels, visible controls, step-by-step guidance, immediate feedback, and confirmation messages.

> [!question]- Q0249 — Apply Norman's cycle to a user who wants to delete a user account: what is the intention?
> The intention is to open admin user management and confirm deletion in order to achieve the user's goal.

> [!question]- Q0250 — For the task 'delete a user account', give one possible gulf of execution.
> A possible gulf of execution is: dangerous action too close to normal actions. The user cannot easily translate the goal into interface actions.

> [!question]- Q0251 — For the task 'delete a user account', give one possible gulf of evaluation.
> A possible gulf of evaluation is: unclear whether deletion succeeded. The user cannot easily understand the system state after acting.

> [!question]- Q0252 — How can the interface reduce gulfs for 'delete a user account'?
> Use clearer labels, visible controls, step-by-step guidance, immediate feedback, and confirmation messages.

> [!question]- Q0253 — Compare hierarchical diagram and network diagram.
> A hierarchical diagram shows structural organization; a network diagram shows task flow and what leads to what.

> [!question]- Q0254 — Compare local navigation and global navigation.
> Local navigation concerns one screen; global navigation concerns movement across the whole system.

> [!question]- Q0255 — Compare prototype and final product.
> A prototype is used to explore and evaluate ideas; the final product is implemented and deployed for real use.

> [!question]- Q0256 — Compare affordance and feedback.
> Affordance suggests possible action; feedback tells what happened after the action.

> [!question]- Q0257 — Compare gulf of execution and gulf of evaluation.
> Execution concerns finding how to act; evaluation concerns understanding what happened.

> [!question]- Q0258 — Compare grouping and alignment.
> Grouping shows conceptual relationships; alignment improves scanning and comparison.

> [!question]- Q0259 — Compare white space and decoration.
> White space structures information; decoration emphasizes or separates but can clutter if overused.

> [!question]- Q0260 — Compare screen order and task order.
> Screen order should match the natural order in which users perform the task.

> [!question]- Q0261 — Compare deep hierarchy and broad hierarchy.
> Deep hierarchy has many levels; broad hierarchy has more options per level and may reduce navigation depth.

> [!question]- Q0262 — Compare visual design and interaction design.
> Visual design focuses on appearance; interaction design focuses on user actions, flow, feedback, and system behavior.

## 03 — Evaluation Techniques and Controlled Experiments

> [!question]- Q0263 — What is evaluation in user-centered design?
> Evaluation checks whether the system supports users effectively, efficiently, safely, and satisfactorily.

> [!question]- Q0264 — What is think aloud evaluation?
> A user performs tasks while verbalizing what they are doing, thinking, expecting, and why.

> [!question]- Q0265 — What is the main advantage of think aloud?
> It is simple, requires little expertise, and reveals how users actually understand and use the interface.

> [!question]- Q0266 — What is a limitation of think aloud?
> It is subjective and the act of speaking can alter the user's task performance.

> [!question]- Q0267 — What should the evaluator say before a think aloud session?
> Explain that the interface is being tested, not the user; the user can quit; and the evaluator cannot help during tasks.

> [!question]- Q0268 — What should the evaluator do if the user falls silent during think aloud?
> Prompt gently with a neutral phrase such as 'please keep talking'.

> [!question]- Q0269 — Why should the evaluator avoid helping during think aloud?
> Helping would change the task performance and hide usability problems.

> [!question]- Q0270 — Why should evaluators avoid defending their design?
> Evaluation is about learning from users, not convincing users that the design is correct.

> [!question]- Q0271 — What is cooperative evaluation?
> A variation of think aloud where the user is treated as a collaborator and may ask clarification questions.

> [!question]- Q0272 — What is a post-task walkthrough?
> A method where the session record is reviewed with the participant after the task to clarify motivations and problems.

> [!question]- Q0273 — Why is a post-task walkthrough useful?
> It helps explain actions that were observed but not fully verbalized during the task.

> [!question]- Q0274 — What is protocol analysis?
> The analysis of data collected during evaluation, such as notes, audio, video, logs, or user notebooks.

> [!question]- Q0275 — What is a controlled experiment?
> An evaluation where conditions differ only in controlled variables so that changes in measured behavior can be attributed to those variables.

> [!question]- Q0276 — What is an independent variable?
> The variable manipulated by the evaluator, such as icon style, interface version, or number of menu items.

> [!question]- Q0277 — What is a dependent variable?
> The variable measured by the evaluator, such as task time, number of errors, success rate, or satisfaction score.

> [!question]- Q0278 — What is a hypothesis?
> A prediction about the expected effect of the independent variable on the dependent variable.

> [!question]- Q0279 — What is a null hypothesis?
> The assumption that there is no difference in the dependent variables caused by changes in the independent variable.

> [!question]- Q0280 — Why do controlled experiments need comparable participants?
> Because differences in experience or domain knowledge may bias the results.

> [!question]- Q0281 — What is a within-subjects design?
> Each participant performs the task under each experimental condition.

> [!question]- Q0282 — What is a between-subjects design?
> Each participant performs the task under only one experimental condition.

> [!question]- Q0283 — What is the main risk of within-subjects design?
> Learning or transfer effects: participants may perform better in later conditions because they learned from earlier ones.

> [!question]- Q0284 — What is the main limitation of between-subjects design?
> It requires more participants and can be biased by differences between groups.

> [!question]- Q0285 — How can learning effects be reduced in within-subjects design?
> Counterbalance the order of conditions, for example half A-B and half B-A.

> [!question]- Q0286 — What is the minimum suggested number of participants in the slides?
> At least 10 subjects are suggested as a minimum for a controlled experiment.

> [!question]- Q0287 — Why are statistics needed in experiments?
> Statistics help decide whether observed differences are meaningful or could be due to chance or small sample size.

> [!question]- Q0288 — What does ANOVA help analyze?
> ANOVA helps compare variance between multiple conditions or populations to test whether differences are statistically meaningful.

> [!question]- Q0289 — What is the difference between qualitative and quantitative evaluation data?
> Qualitative data explains experiences and problems; quantitative data measures values such as time, errors, ratings, or success rate.

> [!question]- Q0290 — What is a usability problem?
> A usability problem is an interface issue that prevents, slows down, confuses, or frustrates users while completing a task.

> [!question]- Q0291 — What should an evaluation report include?
> Participants, tasks, method, observations, problems, evidence, severity, and design recommendations.

> [!question]- Q0292 — Why should evaluation tasks represent typical user goals?
> Because unrealistic tasks produce findings that may not apply to real use.

> [!question]- Q0293 — In an experiment comparing naturalistic icons versus abstract icons, what is the independent variable?
> The independent variable is icon style, because it is manipulated by the evaluator.

> [!question]- Q0294 — In an experiment comparing naturalistic icons versus abstract icons, give suitable dependent variables.
> Suitable dependent variables are time to select the correct icon and number of mistakes, because they measure user behavior or performance.

> [!question]- Q0295 — Write a hypothesis for an experiment comparing naturalistic icons versus abstract icons.
> Users will remember naturalistic icons more easily than abstract icons.

> [!question]- Q0296 — Write the null hypothesis for an experiment comparing naturalistic icons versus abstract icons.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0297 — Would within-subjects design be suitable for naturalistic icons versus abstract icons?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0298 — In an experiment comparing list navigation versus bottom navigation, what is the independent variable?
> The independent variable is navigation style, because it is manipulated by the evaluator.

> [!question]- Q0299 — In an experiment comparing list navigation versus bottom navigation, give suitable dependent variables.
> Suitable dependent variables are task completion time, success rate, and errors, because they measure user behavior or performance.

> [!question]- Q0300 — Write a hypothesis for an experiment comparing list navigation versus bottom navigation.
> Bottom navigation will let users reach frequent actions faster.

> [!question]- Q0301 — Write the null hypothesis for an experiment comparing list navigation versus bottom navigation.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0302 — Would within-subjects design be suitable for list navigation versus bottom navigation?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0303 — In an experiment comparing short form versus long form, what is the independent variable?
> The independent variable is form length, because it is manipulated by the evaluator.

> [!question]- Q0304 — In an experiment comparing short form versus long form, give suitable dependent variables.
> Suitable dependent variables are completion time, abandonment rate, and errors, because they measure user behavior or performance.

> [!question]- Q0305 — Write a hypothesis for an experiment comparing short form versus long form.
> The short form will reduce completion time and errors.

> [!question]- Q0306 — Write the null hypothesis for an experiment comparing short form versus long form.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0307 — Would within-subjects design be suitable for short form versus long form?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0308 — In an experiment comparing text labels versus icon-only buttons, what is the independent variable?
> The independent variable is button representation, because it is manipulated by the evaluator.

> [!question]- Q0309 — In an experiment comparing text labels versus icon-only buttons, give suitable dependent variables.
> Suitable dependent variables are selection errors and task time, because they measure user behavior or performance.

> [!question]- Q0310 — Write a hypothesis for an experiment comparing text labels versus icon-only buttons.
> Text labels will reduce selection errors compared with icon-only buttons.

> [!question]- Q0311 — Write the null hypothesis for an experiment comparing text labels versus icon-only buttons.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0312 — Would within-subjects design be suitable for text labels versus icon-only buttons?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0313 — In an experiment comparing wizard flow versus single-page form, what is the independent variable?
> The independent variable is interaction flow, because it is manipulated by the evaluator.

> [!question]- Q0314 — In an experiment comparing wizard flow versus single-page form, give suitable dependent variables.
> Suitable dependent variables are completion time, errors, and satisfaction, because they measure user behavior or performance.

> [!question]- Q0315 — Write a hypothesis for an experiment comparing wizard flow versus single-page form.
> The wizard flow will reduce errors for complex tasks.

> [!question]- Q0316 — Write the null hypothesis for an experiment comparing wizard flow versus single-page form.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0317 — Would within-subjects design be suitable for wizard flow versus single-page form?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0318 — In an experiment comparing manual search versus recommendation shortlist, what is the independent variable?
> The independent variable is decision support method, because it is manipulated by the evaluator.

> [!question]- Q0319 — In an experiment comparing manual search versus recommendation shortlist, give suitable dependent variables.
> Suitable dependent variables are time to choose and satisfaction, because they measure user behavior or performance.

> [!question]- Q0320 — Write a hypothesis for an experiment comparing manual search versus recommendation shortlist.
> The shortlist will reduce decision time.

> [!question]- Q0321 — Write the null hypothesis for an experiment comparing manual search versus recommendation shortlist.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0322 — Would within-subjects design be suitable for manual search versus recommendation shortlist?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0323 — In an experiment comparing push reminders versus email reminders, what is the independent variable?
> The independent variable is notification channel, because it is manipulated by the evaluator.

> [!question]- Q0324 — In an experiment comparing push reminders versus email reminders, give suitable dependent variables.
> Suitable dependent variables are response rate and reminder success, because they measure user behavior or performance.

> [!question]- Q0325 — Write a hypothesis for an experiment comparing push reminders versus email reminders.
> Push reminders will increase response rate compared with email reminders.

> [!question]- Q0326 — Write the null hypothesis for an experiment comparing push reminders versus email reminders.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0327 — Would within-subjects design be suitable for push reminders versus email reminders?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0328 — In an experiment comparing map-first parking UI versus list-first parking UI, what is the independent variable?
> The independent variable is interface layout, because it is manipulated by the evaluator.

> [!question]- Q0329 — In an experiment comparing map-first parking UI versus list-first parking UI, give suitable dependent variables.
> Suitable dependent variables are time to reserve a space and number of wrong selections, because they measure user behavior or performance.

> [!question]- Q0330 — Write a hypothesis for an experiment comparing map-first parking UI versus list-first parking UI.
> Map-first UI will reduce selection time for nearby spaces.

> [!question]- Q0331 — Write the null hypothesis for an experiment comparing map-first parking UI versus list-first parking UI.
> There is no significant difference between the compared conditions in the measured user performance or satisfaction.

> [!question]- Q0332 — Would within-subjects design be suitable for map-first parking UI versus list-first parking UI?
> Yes, if learning effects are controlled by counterbalancing. It reduces user variation because each participant tries both conditions.

> [!question]- Q0333 — What is one advantage of paper and pencil notes in protocol analysis?
> Cheap and simple.

> [!question]- Q0334 — What is one limitation of paper and pencil notes in protocol analysis?
> Limited by writing speed and observer detail.

> [!question]- Q0335 — What is one advantage of audio recording in protocol analysis?
> Good for think aloud speech.

> [!question]- Q0336 — What is one limitation of audio recording in protocol analysis?
> Hard to match with screen actions.

> [!question]- Q0337 — What is one advantage of video recording in protocol analysis?
> Accurate and realistic.

> [!question]- Q0338 — What is one limitation of video recording in protocol analysis?
> Requires equipment and may be obtrusive.

> [!question]- Q0339 — What is one advantage of computer logging in protocol analysis?
> Automatic and unobtrusive.

> [!question]- Q0340 — What is one limitation of computer logging in protocol analysis?
> Large amounts of data can be hard to analyze.

> [!question]- Q0341 — What is one advantage of user notebooks in protocol analysis?
> Useful for longitudinal insights.

> [!question]- Q0342 — What is one limitation of user notebooks in protocol analysis?
> Coarse and subjective.

> [!question]- Q0343 — When is think aloud a good evaluation method?
> Use think aloud for early usability insight into user reasoning, especially when you need to understand why users struggle.

> [!question]- Q0344 — What kind of evidence does think aloud mainly produce?
> It mainly produces evidence about early usability insight into user reasoning.

> [!question]- Q0345 — When is cooperative evaluation a good evaluation method?
> Use cooperative evaluation for collaborative exploration of interface problems, especially when participant feedback and clarification are useful.

> [!question]- Q0346 — What kind of evidence does cooperative evaluation mainly produce?
> It mainly produces evidence about collaborative exploration of interface problems.

> [!question]- Q0347 — When is post-task walkthrough a good evaluation method?
> Use post-task walkthrough for clarification after observing a task, especially when actions were unclear during the session.

> [!question]- Q0348 — What kind of evidence does post-task walkthrough mainly produce?
> It mainly produces evidence about clarification after observing a task.

> [!question]- Q0349 — When is controlled experiment a good evaluation method?
> Use controlled experiment for comparison between design alternatives, especially when you need measurable evidence about which condition performs better.

> [!question]- Q0350 — What kind of evidence does controlled experiment mainly produce?
> It mainly produces evidence about comparison between design alternatives.

> [!question]- Q0351 — When is questionnaire after testing a good evaluation method?
> Use questionnaire after testing for subjective satisfaction and attitude data, especially when you need structured user opinions.

> [!question]- Q0352 — What kind of evidence does questionnaire after testing mainly produce?
> It mainly produces evidence about subjective satisfaction and attitude data.

> [!question]- Q0353 — When is analytics/logging a good evaluation method?
> Use analytics/logging for large-scale behavioral data, especially when you need objective usage patterns.

> [!question]- Q0354 — What kind of evidence does analytics/logging mainly produce?
> It mainly produces evidence about large-scale behavioral data.

> [!question]- Q0355 — Why is 'helping the user during think aloud' a mistake in evaluation?
> It hides real usability problems and changes task performance.

> [!question]- Q0356 — Why is 'using tasks that do not match real goals' a mistake in evaluation?
> The results may not generalize to actual use.

> [!question]- Q0357 — Why is 'mixing evaluation methods without separating results' a mistake in evaluation?
> It becomes unclear which method produced which finding.

> [!question]- Q0358 — Why is 'changing more than one independent variable at once' a mistake in evaluation?
> You cannot attribute the result to one cause.

> [!question]- Q0359 — Why is 'using participants unlike the target users' a mistake in evaluation?
> The findings may not represent the real user population.

> [!question]- Q0360 — Why is 'ignoring learning effects' a mistake in evaluation?
> Later tasks may look easier only because users practiced earlier.

> [!question]- Q0361 — Why is 'measuring only satisfaction' a mistake in evaluation?
> Users may be satisfied but still slow or error-prone.

> [!question]- Q0362 — Why is 'recording data but not taking notes' a mistake in evaluation?
> Important observations can be missed or hard to interpret later.

> [!question]- Q0363 — Why is 'asking leading debrief questions' a mistake in evaluation?
> Participants may report what the evaluator expects to hear.

> [!question]- Q0364 — Why is 'treating a small preference difference as proof' a mistake in evaluation?
> Without statistics or enough data, the difference may be unreliable.

## 04 — Software Architecture and Technologies

> [!question]- Q0365 — What is software architecture?
> Software architecture is the high-level structure of a system: components, responsibilities, interfaces, data flow, and communication mechanisms.

> [!question]- Q0366 — What should an architecture answer in an exam exercise?
> It should identify components, describe each component, propose technologies, and explain interfaces and communications.

> [!question]- Q0367 — What is a client application?
> The client application is the user-facing interface, such as a mobile app, web portal, or desktop UI.

> [!question]- Q0368 — What is a backend service?
> A backend service implements business logic, coordinates data access, exposes APIs, and integrates external services.

> [!question]- Q0369 — What is an API gateway?
> An API gateway provides a single entry point, handling routing, authentication, rate limiting, and service composition.

> [!question]- Q0370 — What is an authentication service?
> A component that verifies user identity and manages login, tokens, roles, and access control.

> [!question]- Q0371 — What is a database component?
> A component responsible for persistent storage of users, domain data, configuration, logs, and transactions.

> [!question]- Q0372 — What is a notification service?
> A component that sends alerts, confirmations, reminders, or anomaly notifications through push, email, or SMS.

> [!question]- Q0373 — What is an analytics engine?
> A component that processes historical or real-time data to generate trends, reports, insights, or recommendations.

> [!question]- Q0374 — What is a sensor ingestion service?
> A component that receives, validates, and stores data coming from sensors or IoT devices.

> [!question]- Q0375 — What is a message broker?
> A middleware component that supports asynchronous communication between services through messages or events.

> [!question]- Q0376 — Why use asynchronous messaging?
> It decouples producers and consumers, improves resilience, and handles events such as sensor data or notifications.

> [!question]- Q0377 — What is a REST API?
> A web API style where resources are accessed through HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

> [!question]- Q0378 — What is GraphQL?
> An API query language where clients request exactly the data they need from a typed schema.

> [!question]- Q0379 — When is REST a good choice?
> REST is suitable for resource-oriented APIs, broad compatibility, simple CRUD operations, and standard web communication.

> [!question]- Q0380 — When is GraphQL a good choice?
> GraphQL is useful when clients need flexible queries and want to reduce over-fetching or under-fetching.

> [!question]- Q0381 — What is HTTPS used for?
> HTTPS encrypts communication between clients and servers and helps protect credentials, tokens, and sensitive data.

> [!question]- Q0382 — What is a microservice?
> A small, independently deployable service focused on a specific business capability.

> [!question]- Q0383 — What is the main benefit of microservices?
> They allow independent development, deployment, scaling, and maintenance of individual components.

> [!question]- Q0384 — What is a drawback of microservices?
> They increase operational complexity, distributed communication, monitoring needs, and data consistency challenges.

> [!question]- Q0385 — What is a monolithic architecture?
> An architecture where most business logic is packaged and deployed as a single application.

> [!question]- Q0386 — When can a monolith be appropriate?
> A monolith can be appropriate for small teams, simple systems, early prototypes, or projects with limited complexity.

> [!question]- Q0387 — What is containerization?
> Containerization packages an application with its dependencies so it can run consistently across environments.

> [!question]- Q0388 — What is Docker commonly used for?
> Docker is used to build, package, and run applications inside containers.

> [!question]- Q0389 — What is Kubernetes commonly used for?
> Kubernetes orchestrates containers, managing deployment, scaling, service discovery, and recovery.

> [!question]- Q0390 — What is virtualization?
> Virtualization runs multiple virtual machines on shared hardware, each with its own operating system.

> [!question]- Q0391 — How is containerization different from virtualization?
> Containers share the host OS kernel and are lighter; virtual machines include a full guest OS and are heavier.

> [!question]- Q0392 — What is cloud computing?
> Cloud computing provides computing resources such as servers, databases, storage, and services over the internet.

> [!question]- Q0393 — What is scalability?
> Scalability is the ability of a system to handle increased workload by adding resources or distributing load.

> [!question]- Q0394 — What is availability?
> Availability is the ability of the system to remain accessible and operational when users need it.

> [!question]- Q0395 — What is reliability?
> Reliability is the ability of the system to perform correctly over time without failures.

> [!question]- Q0396 — What is fault tolerance?
> Fault tolerance is the ability to continue operating despite failures in some components.

> [!question]- Q0397 — What is role-based access control?
> RBAC grants permissions based on user roles, such as user, administrator, operator, or healthcare professional.

> [!question]- Q0398 — What is an external service integration?
> It is communication with third-party services such as payment gateways, maps, wearable APIs, email, or SMS providers.

> [!question]- Q0399 — What is a technology proposal in an architecture answer?
> It is a justified choice of platforms, frameworks, databases, messaging systems, cloud services, or protocols.

> [!question]- Q0400 — Which main components would you include in the architecture of Environmental Monitoring System?
> Include client app/web portal, backend/API, database, authentication, sensors integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0401 — What data should the backend manage in Environmental Monitoring System?
> It should manage environmental metrics, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0402 — What communication mechanism is suitable between client and backend in Environmental Monitoring System?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0403 — What is the role of notifications in Environmental Monitoring System?
> The notification service sends alerts when thresholds are exceeded to researchers and authorities through push notifications, email, or SMS.

> [!question]- Q0404 — What security concerns are important in Environmental Monitoring System?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0405 — Which database choice could be reasonable for Environmental Monitoring System?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0406 — Why might Environmental Monitoring System benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0407 — Which main components would you include in the architecture of Smart Urban Parking Management System?
> Include client app/web portal, backend/API, database, authentication, parking sensors integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0408 — What data should the backend manage in Smart Urban Parking Management System?
> It should manage space availability and reservations, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0409 — What communication mechanism is suitable between client and backend in Smart Urban Parking Management System?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0410 — What is the role of notifications in Smart Urban Parking Management System?
> The notification service sends parking reminders and payment receipts to drivers and city operators through push notifications, email, or SMS.

> [!question]- Q0411 — What security concerns are important in Smart Urban Parking Management System?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0412 — Which database choice could be reasonable for Smart Urban Parking Management System?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0413 — Why might Smart Urban Parking Management System benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0414 — Which main components would you include in the architecture of Smart Health and Wellness System?
> Include client app/web portal, backend/API, database, authentication, wearables and smart home sensors integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0415 — What data should the backend manage in Smart Health and Wellness System?
> It should manage health and wellness data, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0416 — What communication mechanism is suitable between client and backend in Smart Health and Wellness System?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0417 — What is the role of notifications in Smart Health and Wellness System?
> The notification service sends anomaly and reminder notifications to users and service providers through push notifications, email, or SMS.

> [!question]- Q0418 — What security concerns are important in Smart Health and Wellness System?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0419 — Which database choice could be reasonable for Smart Health and Wellness System?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0420 — Why might Smart Health and Wellness System benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0421 — Which main components would you include in the architecture of BikeWare?
> Include client app/web portal, backend/API, database, authentication, bike sensors and rider input integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0422 — What data should the backend manage in BikeWare?
> It should manage ride and rider data, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0423 — What communication mechanism is suitable between client and backend in BikeWare?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0424 — What is the role of notifications in BikeWare?
> The notification service sends training insights and graph updates to a competitive rider through push notifications, email, or SMS.

> [!question]- Q0425 — What security concerns are important in BikeWare?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0426 — Which database choice could be reasonable for BikeWare?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0427 — Why might BikeWare benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0428 — Which main components would you include in the architecture of Contact Tracing App?
> Include client app/web portal, backend/API, database, authentication, mobile devices integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0429 — What data should the backend manage in Contact Tracing App?
> It should manage exposure events and positive case codes, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0430 — What communication mechanism is suitable between client and backend in Contact Tracing App?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0431 — What is the role of notifications in Contact Tracing App?
> The notification service sends exposure notifications to citizens and healthcare operators through push notifications, email, or SMS.

> [!question]- Q0432 — What security concerns are important in Contact Tracing App?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0433 — Which database choice could be reasonable for Contact Tracing App?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0434 — Why might Contact Tracing App benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0435 — Which main components would you include in the architecture of University Exam Booking System?
> Include client app/web portal, backend/API, database, authentication, student portal integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0436 — What data should the backend manage in University Exam Booking System?
> It should manage exam sessions and bookings, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0437 — What communication mechanism is suitable between client and backend in University Exam Booking System?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0438 — What is the role of notifications in University Exam Booking System?
> The notification service sends booking confirmations to students and administrators through push notifications, email, or SMS.

> [!question]- Q0439 — What security concerns are important in University Exam Booking System?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0440 — Which database choice could be reasonable for University Exam Booking System?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0441 — Why might University Exam Booking System benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0442 — Which main components would you include in the architecture of Movie Group Decision App?
> Include client app/web portal, backend/API, database, authentication, mobile app interactions integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0443 — What data should the backend manage in Movie Group Decision App?
> It should manage likes, dislikes, watchlists, and groups, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0444 — What communication mechanism is suitable between client and backend in Movie Group Decision App?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0445 — What is the role of notifications in Movie Group Decision App?
> The notification service sends movie night shortlist notifications to friends and group members through push notifications, email, or SMS.

> [!question]- Q0446 — What security concerns are important in Movie Group Decision App?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0447 — Which database choice could be reasonable for Movie Group Decision App?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0448 — Why might Movie Group Decision App benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0449 — Which main components would you include in the architecture of Gym Booking System?
> Include client app/web portal, backend/API, database, authentication, mobile app and reception desk integration, analytics/reporting, notification service, and admin interface.

> [!question]- Q0450 — What data should the backend manage in Gym Booking System?
> It should manage bookings, subscriptions, and room capacity, user accounts, permissions, configurations, logs, and audit information.

> [!question]- Q0451 — What communication mechanism is suitable between client and backend in Gym Booking System?
> Use HTTPS with REST or GraphQL APIs. For real-time events, add push notifications, WebSockets, or asynchronous messaging.

> [!question]- Q0452 — What is the role of notifications in Gym Booking System?
> The notification service sends booking reminders to members and gym staff through push notifications, email, or SMS.

> [!question]- Q0453 — What security concerns are important in Gym Booking System?
> Authentication, authorization, encrypted communication, secure storage, privacy protection, audit logs, and least-privilege access.

> [!question]- Q0454 — Which database choice could be reasonable for Gym Booking System?
> A relational database is suitable for structured transactional data; a time-series or document database may be added for high-volume sensor or event data.

> [!question]- Q0455 — Why might Gym Booking System benefit from cloud infrastructure?
> Cloud infrastructure supports scalable storage, elastic processing, managed databases, monitoring, backup, and high availability.

> [!question]- Q0456 — Compare REST and GraphQL.
> REST exposes resources through standard endpoints; GraphQL exposes a typed query interface where clients ask for exactly the needed data.

> [!question]- Q0457 — Compare SQL database and NoSQL database.
> SQL is strong for structured relations and transactions; NoSQL is flexible for documents, events, or large-scale distributed data.

> [!question]- Q0458 — Compare synchronous API and asynchronous messaging.
> Synchronous APIs wait for immediate response; asynchronous messaging decouples components and handles events later.

> [!question]- Q0459 — Compare authentication and authorization.
> Authentication verifies identity; authorization decides what the authenticated user can access.

> [!question]- Q0460 — Compare scalability and performance.
> Scalability concerns growth under load; performance concerns response time and resource use for current workload.

> [!question]- Q0461 — Compare availability and reliability.
> Availability concerns being accessible; reliability concerns correct operation over time.

> [!question]- Q0462 — Compare client-side validation and server-side validation.
> Client-side validation improves usability; server-side validation is required for security and correctness.

> [!question]- Q0463 — Compare API gateway and service discovery.
> An API gateway receives external requests; service discovery helps services locate each other internally.

> [!question]- Q0464 — Compare container and virtual machine.
> A container shares the host kernel; a virtual machine runs a full guest operating system.

> [!question]- Q0465 — Compare monolith and microservices.
> A monolith deploys one application; microservices deploy independent services around business capabilities.

> [!question]- Q0466 — What should you explain about the mobile app in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0467 — Why should the mobile app have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0468 — What should you explain about the web portal in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0469 — Why should the web portal have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0470 — What should you explain about the admin dashboard in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0471 — Why should the admin dashboard have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0472 — What should you explain about the API gateway in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0473 — Why should the API gateway have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0474 — What should you explain about the authentication service in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0475 — Why should the authentication service have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0476 — What should you explain about the domain service in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0477 — Why should the domain service have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0478 — What should you explain about the database in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0479 — Why should the database have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0480 — What should you explain about the message broker in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0481 — Why should the message broker have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0482 — What should you explain about the notification service in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0483 — Why should the notification service have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0484 — What should you explain about the analytics engine in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0485 — Why should the analytics engine have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0486 — What should you explain about the reporting module in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0487 — Why should the reporting module have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0488 — What should you explain about the external API adapter in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0489 — Why should the external API adapter have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0490 — What should you explain about the monitoring service in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0491 — Why should the monitoring service have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0492 — What should you explain about the logging service in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0493 — Why should the logging service have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0494 — What should you explain about the file storage in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0495 — Why should the file storage have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0496 — What should you explain about the payment gateway adapter in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0497 — Why should the payment gateway adapter have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0498 — What should you explain about the map service adapter in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0499 — Why should the map service adapter have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

> [!question]- Q0500 — What should you explain about the sensor ingestion module in an architecture diagram?
> Explain its responsibility, the data it handles, the technologies used, and how it communicates with other components.

> [!question]- Q0501 — Why should the sensor ingestion module have a clear responsibility?
> Clear responsibility reduces coupling, improves maintainability, and makes the architecture easier to explain and test.

## 05 — SCRUM, Lifecycle, Testing and Validation

> [!question]- Q0502 — What is SCRUM?
> SCRUM is an agile framework that organizes work into short iterations called sprints, with frequent inspection and adaptation.

> [!question]- Q0503 — What is a sprint?
> A sprint is a fixed-length iteration where the team delivers a potentially usable increment of the product.

> [!question]- Q0504 — What is the product backlog?
> The product backlog is the ordered list of features, fixes, improvements, and requirements for the product.

> [!question]- Q0505 — What is the sprint backlog?
> The sprint backlog contains the selected backlog items and plan for the current sprint.

> [!question]- Q0506 — What is a product increment?
> A product increment is the working, tested result delivered at the end of a sprint.

> [!question]- Q0507 — What is the Definition of Done?
> A shared checklist defining when work is complete, usually including implementation, testing, integration, review, and documentation.

> [!question]- Q0508 — Who is the Product Owner?
> The Product Owner maximizes product value, manages backlog priorities, and represents stakeholder needs.

> [!question]- Q0509 — Who is the Scrum Master?
> The Scrum Master facilitates SCRUM, removes impediments, and helps the team follow agile practices.

> [!question]- Q0510 — Who are the Developers in SCRUM?
> The Developers are the team members who design, implement, test, and deliver the product increment.

> [!question]- Q0511 — What is sprint planning?
> The event where the team selects backlog items, defines the sprint goal, and plans how to deliver them.

> [!question]- Q0512 — What is a daily scrum?
> A short daily event where developers inspect progress and adapt the plan toward the sprint goal.

> [!question]- Q0513 — What is a sprint review?
> The event where the team presents the increment to stakeholders and collects feedback.

> [!question]- Q0514 — What is a sprint retrospective?
> The event where the team reflects on process, collaboration, tools, and improvements for the next sprint.

> [!question]- Q0515 — What is a sprint goal?
> A concise objective that gives coherence to the selected backlog items for the sprint.

> [!question]- Q0516 — Why should each sprint include testing?
> Because each increment should be working and verified, avoiding a large testing phase only at the end.

> [!question]- Q0517 — Why is SCRUM suitable for uncertain requirements?
> It supports iterative refinement, frequent feedback, and adaptation when requirements evolve.

> [!question]- Q0518 — What is backlog refinement?
> The activity of clarifying, splitting, estimating, and prioritizing backlog items before sprint planning.

> [!question]- Q0519 — What is a user story map?
> A structure that organizes user activities and stories to plan releases and increments.

> [!question]- Q0520 — What is velocity in agile planning?
> Velocity is the amount of work a team typically completes in a sprint, often measured in story points.

> [!question]- Q0521 — Why should sprint plans be organized by value, not by technical layers only?
> Because each sprint should deliver user-visible functionality rather than isolated pieces that cannot be evaluated.

> [!question]- Q0522 — What is the V-Model?
> A lifecycle model that links development phases on the left with corresponding testing phases on the right.

> [!question]- Q0523 — What is verification?
> Verification checks whether the product is built correctly according to specifications.

> [!question]- Q0524 — What is validation?
> Validation checks whether the right product was built for user needs and intended use.

> [!question]- Q0525 — What is unit testing?
> Testing individual units or components, usually by developers, to check local correctness.

> [!question]- Q0526 — What is integration testing?
> Testing interactions between modules, services, databases, or external systems.

> [!question]- Q0527 — What is system testing?
> Testing the complete integrated system against system requirements.

> [!question]- Q0528 — What is acceptance testing?
> Testing with user or stakeholder criteria to decide whether the system is acceptable.

> [!question]- Q0529 — What is regression testing?
> Re-running tests after changes to ensure existing functionality still works.

> [!question]- Q0530 — What is test coverage?
> A measure of how much code, requirements, or behavior is exercised by tests.

> [!question]- Q0531 — What is risk management in a SCRUM project?
> Identifying, prioritizing, and reducing technical, schedule, requirement, security, and quality risks across sprints.

> [!question]- Q0532 — How can a 3-month SCRUM plan be structured at high level?
> Split the duration into short sprints, each with a sprint goal, selected backlog items, development, testing, review, and retrospective.

> [!question]- Q0533 — What should be included for each sprint in a 3-month plan?
> For each sprint, specify sprint goal, main backlog items, activities, expected increment, tests, risks, and review outcomes.

> [!question]- Q0534 — Why should a 3-month SCRUM plan start with architecture and core MVP?
> Because authentication, data model, deployment pipeline, and core workflow reduce technical risk and enable later features.

> [!question]- Q0535 — Why should a 3-month SCRUM plan end with integration and acceptance testing?
> Because the final sprints must stabilize the product, validate requirements, fix defects, and prepare release documentation.

> [!question]- Q0536 — How can a 6-month SCRUM plan be structured at high level?
> Split the duration into short sprints, each with a sprint goal, selected backlog items, development, testing, review, and retrospective.

> [!question]- Q0537 — What should be included for each sprint in a 6-month plan?
> For each sprint, specify sprint goal, main backlog items, activities, expected increment, tests, risks, and review outcomes.

> [!question]- Q0538 — Why should a 6-month SCRUM plan start with architecture and core MVP?
> Because authentication, data model, deployment pipeline, and core workflow reduce technical risk and enable later features.

> [!question]- Q0539 — Why should a 6-month SCRUM plan end with integration and acceptance testing?
> Because the final sprints must stabilize the product, validate requirements, fix defects, and prepare release documentation.

> [!question]- Q0540 — How can a 8-month SCRUM plan be structured at high level?
> Split the duration into short sprints, each with a sprint goal, selected backlog items, development, testing, review, and retrospective.

> [!question]- Q0541 — What should be included for each sprint in a 8-month plan?
> For each sprint, specify sprint goal, main backlog items, activities, expected increment, tests, risks, and review outcomes.

> [!question]- Q0542 — Why should a 8-month SCRUM plan start with architecture and core MVP?
> Because authentication, data model, deployment pipeline, and core workflow reduce technical risk and enable later features.

> [!question]- Q0543 — Why should a 8-month SCRUM plan end with integration and acceptance testing?
> Because the final sprints must stabilize the product, validate requirements, fix defects, and prepare release documentation.

> [!question]- Q0544 — How can a 10-month SCRUM plan be structured at high level?
> Split the duration into short sprints, each with a sprint goal, selected backlog items, development, testing, review, and retrospective.

> [!question]- Q0545 — What should be included for each sprint in a 10-month plan?
> For each sprint, specify sprint goal, main backlog items, activities, expected increment, tests, risks, and review outcomes.

> [!question]- Q0546 — Why should a 10-month SCRUM plan start with architecture and core MVP?
> Because authentication, data model, deployment pipeline, and core workflow reduce technical risk and enable later features.

> [!question]- Q0547 — Why should a 10-month SCRUM plan end with integration and acceptance testing?
> Because the final sprints must stabilize the product, validate requirements, fix defects, and prepare release documentation.

> [!question]- Q0548 — What is a reasonable goal for Sprint 1 in a SCRUM exam plan?
> A reasonable goal is project setup, backlog refinement, core architecture, authentication prototype, and basic UI skeleton, while still delivering a tested increment.

> [!question]- Q0549 — What is a reasonable goal for Sprint 2 in a SCRUM exam plan?
> A reasonable goal is main user workflow, data model, first API endpoints, and basic persistence, while still delivering a tested increment.

> [!question]- Q0550 — What is a reasonable goal for Sprint 3 in a SCRUM exam plan?
> A reasonable goal is advanced user functions, validation rules, notifications, and first integration tests, while still delivering a tested increment.

> [!question]- Q0551 — What is a reasonable goal for Sprint 4 in a SCRUM exam plan?
> A reasonable goal is admin functions, reporting, analytics basics, and security hardening, while still delivering a tested increment.

> [!question]- Q0552 — What is a reasonable goal for Sprint 5 in a SCRUM exam plan?
> A reasonable goal is external integrations, scalability improvements, usability testing, and bug fixing, while still delivering a tested increment.

> [!question]- Q0553 — What is a reasonable goal for Sprint 6 in a SCRUM exam plan?
> A reasonable goal is final integration, acceptance testing, documentation, deployment, and release preparation, while still delivering a tested increment.

> [!question]- Q0554 — What should Sprint 1 deliver for Environmental Monitoring System?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0555 — What should a middle sprint deliver for Environmental Monitoring System?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0556 — What should the final sprint deliver for Environmental Monitoring System?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0557 — Give an example sprint goal for Environmental Monitoring System.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0558 — What risks should be managed during development of Environmental Monitoring System?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0559 — What should Sprint 1 deliver for Smart Urban Parking Management System?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0560 — What should a middle sprint deliver for Smart Urban Parking Management System?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0561 — What should the final sprint deliver for Smart Urban Parking Management System?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0562 — Give an example sprint goal for Smart Urban Parking Management System.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0563 — What risks should be managed during development of Smart Urban Parking Management System?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0564 — What should Sprint 1 deliver for Smart Health and Wellness System?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0565 — What should a middle sprint deliver for Smart Health and Wellness System?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0566 — What should the final sprint deliver for Smart Health and Wellness System?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0567 — Give an example sprint goal for Smart Health and Wellness System.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0568 — What risks should be managed during development of Smart Health and Wellness System?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0569 — What should Sprint 1 deliver for BikeWare?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0570 — What should a middle sprint deliver for BikeWare?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0571 — What should the final sprint deliver for BikeWare?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0572 — Give an example sprint goal for BikeWare.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0573 — What risks should be managed during development of BikeWare?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0574 — What should Sprint 1 deliver for Contact Tracing App?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0575 — What should a middle sprint deliver for Contact Tracing App?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0576 — What should the final sprint deliver for Contact Tracing App?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0577 — Give an example sprint goal for Contact Tracing App.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0578 — What risks should be managed during development of Contact Tracing App?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0579 — What should Sprint 1 deliver for University Exam Booking System?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0580 — What should a middle sprint deliver for University Exam Booking System?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0581 — What should the final sprint deliver for University Exam Booking System?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0582 — Give an example sprint goal for University Exam Booking System.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0583 — What risks should be managed during development of University Exam Booking System?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0584 — What should Sprint 1 deliver for Movie Group Decision App?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0585 — What should a middle sprint deliver for Movie Group Decision App?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0586 — What should the final sprint deliver for Movie Group Decision App?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0587 — Give an example sprint goal for Movie Group Decision App.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0588 — What risks should be managed during development of Movie Group Decision App?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0589 — What should Sprint 1 deliver for Gym Booking System?
> Sprint 1 should deliver project setup, core architecture, authentication, basic UI navigation, initial database schema, and a minimal working flow.

> [!question]- Q0590 — What should a middle sprint deliver for Gym Booking System?
> A middle sprint should add core domain features, data validation, integrations, notifications, and automated tests.

> [!question]- Q0591 — What should the final sprint deliver for Gym Booking System?
> The final sprint should deliver integration testing, acceptance testing, performance/security checks, bug fixing, documentation, and deployment preparation.

> [!question]- Q0592 — Give an example sprint goal for Gym Booking System.
> Deliver a tested end-to-end workflow that lets the main user complete one valuable task from login to confirmation.

> [!question]- Q0593 — What risks should be managed during development of Gym Booking System?
> Manage risks related to requirements ambiguity, data quality, external integrations, security, privacy, performance, and user acceptance.

> [!question]- Q0594 — In the V-Model, which testing activity corresponds to requirements specification?
> Acceptance testing corresponds to requirements specification, because the test checks whether that level of specification was satisfied.

> [!question]- Q0595 — In the V-Model, which testing activity corresponds to system design?
> System testing corresponds to system design, because the test checks whether that level of specification was satisfied.

> [!question]- Q0596 — In the V-Model, which testing activity corresponds to architecture design?
> Integration testing corresponds to architecture design, because the test checks whether that level of specification was satisfied.

> [!question]- Q0597 — In the V-Model, which testing activity corresponds to module design?
> Unit testing corresponds to module design, because the test checks whether that level of specification was satisfied.

> [!question]- Q0598 — In the V-Model, which testing activity corresponds to implementation?
> Code-level tests and reviews corresponds to implementation, because the test checks whether that level of specification was satisfied.

> [!question]- Q0599 — Give a test strategy for the login feature.
> Use layered testing: unit test password validation, integration test token generation, acceptance test successful and failed login scenarios.

> [!question]- Q0600 — What is an acceptance test for the login feature?
> An acceptance test checks that a target user can complete the login task successfully under realistic conditions.

> [!question]- Q0601 — Give a test strategy for the booking feature.
> Use layered testing: unit test availability rules, integration test database update, acceptance test user books a valid slot.

> [!question]- Q0602 — What is an acceptance test for the booking feature?
> An acceptance test checks that a target user can complete the booking task successfully under realistic conditions.

> [!question]- Q0603 — Give a test strategy for the payment feature.
> Use layered testing: unit test price calculation, integration test payment gateway mock, acceptance test receipt generation.

> [!question]- Q0604 — What is an acceptance test for the payment feature?
> An acceptance test checks that a target user can complete the payment task successfully under realistic conditions.

> [!question]- Q0605 — Give a test strategy for the sensor alert feature.
> Use layered testing: unit test threshold rule, integration test sensor ingestion and notification, acceptance test alert received.

> [!question]- Q0606 — What is an acceptance test for the sensor alert feature?
> An acceptance test checks that a target user can complete the sensor alert task successfully under realistic conditions.

> [!question]- Q0607 — Give a test strategy for the report export feature.
> Use layered testing: unit test report formatting, integration test database query and PDF generation, acceptance test user downloads report.

> [!question]- Q0608 — What is an acceptance test for the report export feature?
> An acceptance test checks that a target user can complete the report export task successfully under realistic conditions.

> [!question]- Q0609 — Give a test strategy for the recommendation shortlist feature.
> Use layered testing: unit test scoring logic, integration test group preferences, acceptance test group receives a usable shortlist.

> [!question]- Q0610 — What is an acceptance test for the recommendation shortlist feature?
> An acceptance test checks that a target user can complete the recommendation shortlist task successfully under realistic conditions.

> [!question]- Q0611 — Give a test strategy for the admin user management feature.
> Use layered testing: unit test permission rules, integration test database update, acceptance test admin creates or disables an account.

> [!question]- Q0612 — What is an acceptance test for the admin user management feature?
> An acceptance test checks that a target user can complete the admin user management task successfully under realistic conditions.

> [!question]- Q0613 — Give a test strategy for the health reminder feature.
> Use layered testing: unit test reminder scheduling, integration test notification service, acceptance test user receives reminder at expected time.

> [!question]- Q0614 — What is an acceptance test for the health reminder feature?
> An acceptance test checks that a target user can complete the health reminder task successfully under realistic conditions.

## 06 — Function Points and COCOMO II

> [!question]- Q0615 — What do Function Points measure?
> Function Points measure the functional size of software delivered to the user, independently of programming language.

> [!question]- Q0616 — Why are Function Points useful?
> They estimate software size from requirements before code exists and can support cost and effort estimation.

> [!question]- Q0617 — What is the application boundary in FPA?
> The boundary separates what is inside the system being measured from external users, systems, and data sources.

> [!question]- Q0618 — What is an External Input (EI)?
> An EI is a user or external process input that adds, changes, or deletes internal data.

> [!question]- Q0619 — What is an External Output (EO)?
> An EO is output leaving the system with derived data, processing, calculations, reports, or formatted results.

> [!question]- Q0620 — What is an External Inquiry (EQ)?
> An EQ is an input-output interaction that retrieves data without significant processing or updating internal files.

> [!question]- Q0621 — What is an Internal Logical File (ILF)?
> An ILF is a logical group of data maintained by the application itself.

> [!question]- Q0622 — What is an External Interface File (EIF)?
> An EIF is a logical group of data used by the application but maintained by another system.

> [!question]- Q0623 — What is Unadjusted Function Points (UFP)?
> UFP is the sum of counted functions weighted by type and complexity before adjustment factors.

> [!question]- Q0624 — How are Function Points related to COCOMO II?
> Function Points can be converted into LOC or KSLOC using a language-dependent factor, then used as size input for COCOMO II.

> [!question]- Q0625 — What does COCOMO II estimate?
> COCOMO II estimates effort, development time, and staffing from software size and project factors.

> [!question]- Q0626 — What is KSLOC?
> KSLOC means thousands of source lines of code and is a common size input for COCOMO II.

> [!question]- Q0627 — What is the basic COCOMO II effort idea?
> Effort is estimated from size, scale factors, and effort multipliers; larger and more complex projects require more person-months.

> [!question]- Q0628 — What are effort multipliers in COCOMO II?
> Factors that adjust effort based on product, platform, personnel, and project attributes.

> [!question]- Q0629 — What are scale factors in COCOMO II?
> Factors that affect economies or diseconomies of scale, such as precedentedness, flexibility, architecture/risk resolution, team cohesion, and process maturity.

> [!question]- Q0630 — What is Application Composition in COCOMO II?
> An early estimation level used for prototypes and GUI-intensive applications.

> [!question]- Q0631 — What is Early Design in COCOMO II?
> An estimation level used when the architecture is not fully defined.

> [!question]- Q0632 — What is Post-Architecture in COCOMO II?
> A more detailed estimation level used when the architecture is known.

> [!question]- Q0633 — Why are FPA and COCOMO II connected?
> FPA estimates functional size; COCOMO II uses size to estimate effort and development schedule.

> [!question]- Q0634 — What is the main exam mistake in Function Points exercises?
> Counting technical components instead of user-visible functions and logical data groups.

> [!question]- Q0635 — Classify in Function Points: user submits a booking request.
> External Input, because it updates internal booking data.

> [!question]- Q0636 — Classify in Function Points: admin creates a user account.
> External Input, because it creates or changes internal user data.

> [!question]- Q0637 — Classify in Function Points: user searches historical sensor readings.
> External Inquiry, because it retrieves data based on criteria without updating logical files.

> [!question]- Q0638 — Classify in Function Points: system generates a PDF report with charts.
> External Output, because it produces derived/formatted information leaving the system.

> [!question]- Q0639 — Classify in Function Points: user views real-time vital parameters.
> External Inquiry, because it displays retrieved data without complex derived output.

> [!question]- Q0640 — Classify in Function Points: system sends an anomaly alert.
> External Output, because it sends processed information outside the application boundary.

> [!question]- Q0641 — Classify in Function Points: database table of users maintained by the app.
> Internal Logical File, because it is logical data maintained inside the application.

> [!question]- Q0642 — Classify in Function Points: external wearable device catalog maintained by a vendor.
> External Interface File, because it is used by the app but maintained by another system.

> [!question]- Q0643 — Classify in Function Points: admin updates parking prices.
> External Input, because it modifies internal pricing data.

> [!question]- Q0644 — Classify in Function Points: driver pays for parking.
> External Input, because it records a transaction and changes internal payment/reservation data.

> [!question]- Q0645 — Classify in Function Points: user exports data as CSV.
> External Output, because it formats and sends data outside the system.

> [!question]- Q0646 — Classify in Function Points: system reads map data from Google Maps.
> External Interface File, because the data is external and maintained by another system.

> [!question]- Q0647 — Classify in Function Points: rider edits ride information.
> External Input, because it changes internal ride records.

> [!question]- Q0648 — Classify in Function Points: user opens a dashboard with trend indicators.
> External Output, because it includes derived information and visual processing.

> [!question]- Q0649 — Classify in Function Points: student checks available exam sessions.
> External Inquiry, because it retrieves available sessions without updating them.

> [!question]- Q0650 — Classify in Function Points: admin removes a faulty sensor.
> External Input, because it changes the internal sensor registry.

> [!question]- Q0651 — Classify in Function Points: sensor data storage maintained by the app.
> Internal Logical File, because it is a logical group of data maintained by the system.

> [!question]- Q0652 — Classify in Function Points: external payment gateway transaction status.
> External Interface File, because it is referenced from a system outside the boundary.

> [!question]- Q0653 — Classify in Function Points: user views account profile.
> External Inquiry, because it retrieves user data without significant processing.

> [!question]- Q0654 — Classify in Function Points: system generates monthly analytics.
> External Output, because it produces calculated information from stored data.

> [!question]- Q0655 — What is the first step when applying Function Point Analysis to Environmental Monitoring System?
> Define the application boundary: what belongs to Environmental Monitoring System and what external users, devices, or systems interact with it.

> [!question]- Q0656 — Give one possible EI for Environmental Monitoring System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Environmental Monitoring System.

> [!question]- Q0657 — Give one possible EO for Environmental Monitoring System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Environmental Monitoring System.

> [!question]- Q0658 — Give one possible EQ for Environmental Monitoring System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0659 — Give one possible ILF for Environmental Monitoring System.
> A possible Internal Logical File is the main domain data maintained by Environmental Monitoring System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0660 — Give one possible EIF for Environmental Monitoring System.
> A possible External Interface File is data used by Environmental Monitoring System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0661 — What is the first step when applying Function Point Analysis to Smart Urban Parking Management System?
> Define the application boundary: what belongs to Smart Urban Parking Management System and what external users, devices, or systems interact with it.

> [!question]- Q0662 — Give one possible EI for Smart Urban Parking Management System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Smart Urban Parking Management System.

> [!question]- Q0663 — Give one possible EO for Smart Urban Parking Management System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Smart Urban Parking Management System.

> [!question]- Q0664 — Give one possible EQ for Smart Urban Parking Management System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0665 — Give one possible ILF for Smart Urban Parking Management System.
> A possible Internal Logical File is the main domain data maintained by Smart Urban Parking Management System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0666 — Give one possible EIF for Smart Urban Parking Management System.
> A possible External Interface File is data used by Smart Urban Parking Management System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0667 — What is the first step when applying Function Point Analysis to Smart Health and Wellness System?
> Define the application boundary: what belongs to Smart Health and Wellness System and what external users, devices, or systems interact with it.

> [!question]- Q0668 — Give one possible EI for Smart Health and Wellness System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Smart Health and Wellness System.

> [!question]- Q0669 — Give one possible EO for Smart Health and Wellness System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Smart Health and Wellness System.

> [!question]- Q0670 — Give one possible EQ for Smart Health and Wellness System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0671 — Give one possible ILF for Smart Health and Wellness System.
> A possible Internal Logical File is the main domain data maintained by Smart Health and Wellness System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0672 — Give one possible EIF for Smart Health and Wellness System.
> A possible External Interface File is data used by Smart Health and Wellness System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0673 — What is the first step when applying Function Point Analysis to BikeWare?
> Define the application boundary: what belongs to BikeWare and what external users, devices, or systems interact with it.

> [!question]- Q0674 — Give one possible EI for BikeWare.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in BikeWare.

> [!question]- Q0675 — Give one possible EO for BikeWare.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by BikeWare.

> [!question]- Q0676 — Give one possible EQ for BikeWare.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0677 — Give one possible ILF for BikeWare.
> A possible Internal Logical File is the main domain data maintained by BikeWare, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0678 — Give one possible EIF for BikeWare.
> A possible External Interface File is data used by BikeWare but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0679 — What is the first step when applying Function Point Analysis to Contact Tracing App?
> Define the application boundary: what belongs to Contact Tracing App and what external users, devices, or systems interact with it.

> [!question]- Q0680 — Give one possible EI for Contact Tracing App.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Contact Tracing App.

> [!question]- Q0681 — Give one possible EO for Contact Tracing App.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Contact Tracing App.

> [!question]- Q0682 — Give one possible EQ for Contact Tracing App.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0683 — Give one possible ILF for Contact Tracing App.
> A possible Internal Logical File is the main domain data maintained by Contact Tracing App, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0684 — Give one possible EIF for Contact Tracing App.
> A possible External Interface File is data used by Contact Tracing App but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0685 — What is the first step when applying Function Point Analysis to University Exam Booking System?
> Define the application boundary: what belongs to University Exam Booking System and what external users, devices, or systems interact with it.

> [!question]- Q0686 — Give one possible EI for University Exam Booking System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in University Exam Booking System.

> [!question]- Q0687 — Give one possible EO for University Exam Booking System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by University Exam Booking System.

> [!question]- Q0688 — Give one possible EQ for University Exam Booking System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0689 — Give one possible ILF for University Exam Booking System.
> A possible Internal Logical File is the main domain data maintained by University Exam Booking System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0690 — Give one possible EIF for University Exam Booking System.
> A possible External Interface File is data used by University Exam Booking System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0691 — What is the first step when applying Function Point Analysis to Movie Group Decision App?
> Define the application boundary: what belongs to Movie Group Decision App and what external users, devices, or systems interact with it.

> [!question]- Q0692 — Give one possible EI for Movie Group Decision App.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Movie Group Decision App.

> [!question]- Q0693 — Give one possible EO for Movie Group Decision App.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Movie Group Decision App.

> [!question]- Q0694 — Give one possible EQ for Movie Group Decision App.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0695 — Give one possible ILF for Movie Group Decision App.
> A possible Internal Logical File is the main domain data maintained by Movie Group Decision App, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0696 — Give one possible EIF for Movie Group Decision App.
> A possible External Interface File is data used by Movie Group Decision App but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0697 — What is the first step when applying Function Point Analysis to Gym Booking System?
> Define the application boundary: what belongs to Gym Booking System and what external users, devices, or systems interact with it.

> [!question]- Q0698 — Give one possible EI for Gym Booking System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Gym Booking System.

> [!question]- Q0699 — Give one possible EO for Gym Booking System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Gym Booking System.

> [!question]- Q0700 — Give one possible EQ for Gym Booking System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0701 — Give one possible ILF for Gym Booking System.
> A possible Internal Logical File is the main domain data maintained by Gym Booking System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0702 — Give one possible EIF for Gym Booking System.
> A possible External Interface File is data used by Gym Booking System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0703 — What is the first step when applying Function Point Analysis to E-learning Platform?
> Define the application boundary: what belongs to E-learning Platform and what external users, devices, or systems interact with it.

> [!question]- Q0704 — Give one possible EI for E-learning Platform.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in E-learning Platform.

> [!question]- Q0705 — Give one possible EO for E-learning Platform.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by E-learning Platform.

> [!question]- Q0706 — Give one possible EQ for E-learning Platform.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0707 — Give one possible ILF for E-learning Platform.
> A possible Internal Logical File is the main domain data maintained by E-learning Platform, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0708 — Give one possible EIF for E-learning Platform.
> A possible External Interface File is data used by E-learning Platform but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0709 — What is the first step when applying Function Point Analysis to Library Management System?
> Define the application boundary: what belongs to Library Management System and what external users, devices, or systems interact with it.

> [!question]- Q0710 — Give one possible EI for Library Management System.
> A possible External Input is a user or administrator action that creates, updates, or deletes core data in Library Management System.

> [!question]- Q0711 — Give one possible EO for Library Management System.
> A possible External Output is a generated report, alert, receipt, graph, recommendation, or export produced by Library Management System.

> [!question]- Q0712 — Give one possible EQ for Library Management System.
> A possible External Inquiry is a search or view operation that retrieves information without updating internal data.

> [!question]- Q0713 — Give one possible ILF for Library Management System.
> A possible Internal Logical File is the main domain data maintained by Library Management System, such as users, events, bookings, readings, rides, or preferences.

> [!question]- Q0714 — Give one possible EIF for Library Management System.
> A possible External Interface File is data used by Library Management System but maintained by another system, such as maps, payment status, wearable catalog, or external identity provider data.

> [!question]- Q0715 — Which COCOMO II estimation level fits this situation: requirements are known but architecture is still uncertain?
> Use Early Design, because it matches the available information and project stage.

> [!question]- Q0716 — Which COCOMO II estimation level fits this situation: architecture is stable and major components are defined?
> Use Post-Architecture, because it matches the available information and project stage.

> [!question]- Q0717 — Which COCOMO II estimation level fits this situation: the project is a rapid GUI prototype?
> Use Application Composition, because it matches the available information and project stage.

> [!question]- Q0718 — Which COCOMO II estimation level fits this situation: the team wants a very early rough estimate?
> Use Application Composition or Early Design, because it matches the available information and project stage.

> [!question]- Q0719 — Which COCOMO II estimation level fits this situation: detailed effort multipliers are available?
> Use Post-Architecture, because it matches the available information and project stage.

> [!question]- Q0720 — Which COCOMO II estimation level fits this situation: the system size was estimated using Function Points?
> Use convert FP to LOC/KSLOC and use COCOMO II, because it matches the available information and project stage.

> [!question]- Q0721 — How does high reliability requirement affect a COCOMO II estimate?
> It increases effort because more analysis, testing, and fault prevention are needed.

> [!question]- Q0722 — How does high team experience affect a COCOMO II estimate?
> It can reduce effort because the team works more effectively.

> [!question]- Q0723 — How does very complex product affect a COCOMO II estimate?
> It increases effort because design, implementation, and testing are harder.

> [!question]- Q0724 — How does tight schedule affect a COCOMO II estimate?
> It can increase risk and effort because coordination and pressure grow.

> [!question]- Q0725 — How does reusable architecture affect a COCOMO II estimate?
> It may reduce later effort but may require more early design effort.

> [!question]- Q0726 — How does unstable requirements affect a COCOMO II estimate?
> It increase effort because rework and clarification are needed.

> [!question]- Q0727 — How does strong tool support affect a COCOMO II estimate?
> It can reduce effort by automating build, testing, deployment, and analysis.

> [!question]- Q0728 — How does poor process maturity affect a COCOMO II estimate?
> It can increase effort due to weak planning, quality control, and coordination.

## 07 — SysML, ISO, CMMI and Quality Models

> [!question]- Q0729 — What is SysML?
> SysML is a general-purpose modeling language for systems engineering, used to model requirements, structure, behavior, and constraints.

> [!question]- Q0730 — What is a Block Definition Diagram (BDD)?
> A BDD represents system blocks, their properties, and relationships such as composition, association, and generalization.

> [!question]- Q0731 — What is the main purpose of a SysML BDD?
> To represent the relationships and properties of system elements.

> [!question]- Q0732 — What is an Internal Block Diagram (IBD)?
> An IBD shows the internal structure of a block, including parts, ports, connectors, and flows.

> [!question]- Q0733 — What is a SysML Requirement Diagram?
> A diagram that represents requirements and their relationships, such as containment, derivation, satisfaction, and verification.

> [!question]- Q0734 — What is a Use Case Diagram used for?
> It shows actors, system functions, and interactions between external users or systems and the system boundary.

> [!question]- Q0735 — What is an Activity Diagram used for?
> It models workflows, actions, decisions, parallelism, and control or object flows.

> [!question]- Q0736 — What is a Sequence Diagram used for?
> It models interactions between participants over time through ordered messages.

> [!question]- Q0737 — What is a State Machine Diagram used for?
> It models states of an entity and transitions triggered by events.

> [!question]- Q0738 — What is a Parametric Diagram used for?
> It models constraints, equations, and relationships between system properties.

> [!question]- Q0739 — What is a Package Diagram used for?
> It organizes model elements into packages and shows dependencies between them.

> [!question]- Q0740 — What is traceability in requirements modeling?
> Traceability links requirements to design elements, tests, and implementation artifacts.

> [!question]- Q0741 — What does 'satisfy' mean in SysML requirements?
> A design element satisfies a requirement when it is intended to implement it.

> [!question]- Q0742 — What does 'verify' mean in SysML requirements?
> A test case or verification activity verifies whether a requirement is met.

> [!question]- Q0743 — What is ISO/IEC 25010?
> A software product quality model defining quality characteristics such as usability, reliability, security, maintainability, and portability.

> [!question]- Q0744 — What is ISO/IEC 25001 focused on?
> It is part of SQuaRE and focuses on planning and managing software quality requirements and evaluation.

> [!question]- Q0745 — What does SQuaRE stand for?
> Software product Quality Requirements and Evaluation.

> [!question]- Q0746 — What is ISO/IEC 12207?
> A standard describing software lifecycle processes, including agreement, organizational, technical, and support processes.

> [!question]- Q0747 — What is CMMI?
> CMMI is a process improvement model used to assess and improve organizational process maturity and capability.

> [!question]- Q0748 — What is CMMI Level 0?
> Incomplete: the process is not performed or only partially performed, and specific goals are not satisfied.

> [!question]- Q0749 — What is CMMI Level 1?
> Initial: processes are performed but often ad hoc, unpredictable, and dependent on individual effort.

> [!question]- Q0750 — What is CMMI Level 2?
> Managed: processes are planned, monitored, controlled, and managed at project level.

> [!question]- Q0751 — What is CMMI Level 3?
> Defined: processes are documented, standardized, and used across the organization.

> [!question]- Q0752 — What is CMMI Level 4?
> Quantitatively Managed: processes are measured and controlled using quantitative techniques.

> [!question]- Q0753 — What is CMMI Level 5?
> Optimizing: the organization continuously improves processes based on feedback and quantitative analysis.

> [!question]- Q0754 — Which SysML diagram would you use to model system components and their relationships?
> Use a Block Definition Diagram, because it is designed for that modeling purpose.

> [!question]- Q0755 — Which SysML diagram would you use to show how internal parts of a component are connected?
> Use a Internal Block Diagram, because it is designed for that modeling purpose.

> [!question]- Q0756 — Which SysML diagram would you use to capture stakeholder and system requirements?
> Use a Requirement Diagram, because it is designed for that modeling purpose.

> [!question]- Q0757 — Which SysML diagram would you use to show user goals and external actors?
> Use a Use Case Diagram, because it is designed for that modeling purpose.

> [!question]- Q0758 — Which SysML diagram would you use to model an operational workflow?
> Use a Activity Diagram, because it is designed for that modeling purpose.

> [!question]- Q0759 — Which SysML diagram would you use to show messages exchanged over time?
> Use a Sequence Diagram, because it is designed for that modeling purpose.

> [!question]- Q0760 — Which SysML diagram would you use to model behavior of an object across states?
> Use a State Machine Diagram, because it is designed for that modeling purpose.

> [!question]- Q0761 — Which SysML diagram would you use to represent equations and engineering constraints?
> Use a Parametric Diagram, because it is designed for that modeling purpose.

> [!question]- Q0762 — Which SysML diagram would you use to organize a large model into modules?
> Use a Package Diagram, because it is designed for that modeling purpose.

> [!question]- Q0763 — Which SysML diagram would you use to show physical allocation of software to hardware?
> Use a Allocation relationships with appropriate structural diagrams, because it is designed for that modeling purpose.

> [!question]- Q0764 — What does ISO/IEC 25010 mean by functional suitability?
> It concerns whether the software provides functions that meet stated and implied needs.

> [!question]- Q0765 — Give an exam example of functional suitability as a non-functional requirement.
> The system shall ensure functional suitability by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0766 — What does ISO/IEC 25010 mean by performance efficiency?
> It concerns whether the software uses time and resources efficiently under stated conditions.

> [!question]- Q0767 — Give an exam example of performance efficiency as a non-functional requirement.
> The system shall ensure performance efficiency by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0768 — What does ISO/IEC 25010 mean by compatibility?
> It concerns whether the software can exchange information or coexist with other systems.

> [!question]- Q0769 — Give an exam example of compatibility as a non-functional requirement.
> The system shall ensure compatibility by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0770 — What does ISO/IEC 25010 mean by usability?
> It concerns whether the software can be learned, used, and understood effectively by target users.

> [!question]- Q0771 — Give an exam example of usability as a non-functional requirement.
> The system shall ensure usability by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0772 — What does ISO/IEC 25010 mean by reliability?
> It concerns whether the software performs specified functions under stated conditions over time.

> [!question]- Q0773 — Give an exam example of reliability as a non-functional requirement.
> The system shall ensure reliability by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0774 — What does ISO/IEC 25010 mean by security?
> It concerns whether the software protects information and controls access.

> [!question]- Q0775 — Give an exam example of security as a non-functional requirement.
> The system shall ensure security by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0776 — What does ISO/IEC 25010 mean by maintainability?
> It concerns whether the software can be modified, tested, analyzed, and reused efficiently.

> [!question]- Q0777 — Give an exam example of maintainability as a non-functional requirement.
> The system shall ensure maintainability by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0778 — What does ISO/IEC 25010 mean by portability?
> It concerns whether the software can be transferred to other environments.

> [!question]- Q0779 — Give an exam example of portability as a non-functional requirement.
> The system shall ensure portability by measurable criteria, such as response time, access control, availability, learnability, or deployability depending on the case.

> [!question]- Q0780 — Compare ISO/IEC 12207 and CMMI.
> ISO/IEC 12207 defines lifecycle processes; CMMI assesses and improves process maturity/capability.

> [!question]- Q0781 — Compare ISO/IEC 25010 and ISO/IEC 25001.
> ISO/IEC 25010 defines product quality characteristics; ISO/IEC 25001 supports quality requirements and evaluation planning within SQuaRE.

> [!question]- Q0782 — Compare CMMI Level 2 and CMMI Level 3.
> Level 2 manages processes at project level; Level 3 standardizes defined processes across the organization.

> [!question]- Q0783 — Compare CMMI Level 4 and CMMI Level 5.
> Level 4 quantitatively manages processes; Level 5 focuses on continuous optimization.

> [!question]- Q0784 — Compare BDD and IBD.
> BDD shows block types and relationships; IBD shows internal parts and connections of a block.

> [!question]- Q0785 — Compare Activity Diagram and Sequence Diagram.
> Activity shows workflow and decisions; Sequence shows ordered messages between participants.

> [!question]- Q0786 — Compare Use Case Diagram and Requirement Diagram.
> Use Case shows actor-system interactions; Requirement Diagram shows requirements and traceability.

> [!question]- Q0787 — Compare State Machine Diagram and Activity Diagram.
> State Machine focuses on states and transitions; Activity focuses on workflow actions.

> [!question]- Q0788 — In ISO/IEC 12207, what are agreement processes?
> They concern acquisition and supply relationships between customer and supplier.

> [!question]- Q0789 — In ISO/IEC 12207, what are organizational project-enabling processes?
> They concern infrastructure, life-cycle model management, quality management, and organizational support.

> [!question]- Q0790 — In ISO/IEC 12207, what are technical management processes?
> They concern planning, assessment, decision management, risk management, configuration, information, and measurement.

> [!question]- Q0791 — In ISO/IEC 12207, what are technical processes?
> They concern requirements, architecture, design, implementation, integration, verification, validation, transition, operation, and maintenance.

> [!question]- Q0792 — In ISO/IEC 12207, what are support processes?
> They concern documentation, configuration management, quality assurance, verification, validation, review, audit, and problem resolution.

## 08 — Interoperability, Data, Services and Processes

> [!question]- Q0793 — What is interoperability?
> Interoperability is the ability of two or more systems or components to exchange information and use the exchanged information.

> [!question]- Q0794 — What is syntactic interoperability?
> Syntactic interoperability concerns common formats and structures for exchanged data, such as XML, JSON, or schemas.

> [!question]- Q0795 — What is semantic interoperability?
> Semantic interoperability concerns shared meaning, so systems interpret exchanged information consistently.

> [!question]- Q0796 — What is organizational interoperability?
> Organizational interoperability concerns coordinated processes, responsibilities, message exchanges, and collaboration across systems or organizations.

> [!question]- Q0797 — What are the main interoperability tasks?
> Exchange, integrate, and orchestrate information, services, and processes.

> [!question]- Q0798 — What is data interoperability?
> The ability to exchange, transform, map, integrate, and correctly interpret data across different systems.

> [!question]- Q0799 — What is service interoperability?
> The ability of services to communicate and be invoked through compatible interfaces, protocols, and contracts.

> [!question]- Q0800 — What is process interoperability?
> The ability of processes across systems or organizations to coordinate work through orchestration or choreography.

> [!question]- Q0801 — What is data exchange?
> Moving information from one system to another using agreed formats, protocols, and structures.

> [!question]- Q0802 — What is data integration?
> Combining data from different sources into a coherent view or structure.

> [!question]- Q0803 — What is process orchestration?
> A central process logic coordinates tasks, services, applications, and human work.

> [!question]- Q0804 — What is process choreography?
> Multiple partners coordinate through message exchanges without a single central controller.

> [!question]- Q0805 — Why is interoperability important in healthcare?
> Healthcare systems must share patient-related information securely and meaningfully across providers and services.

> [!question]- Q0806 — Why is interoperability important in IoT systems?
> IoT systems combine heterogeneous devices, sensors, networks, data formats, and cloud services.

> [!question]- Q0807 — What is XML?
> XML is a structured markup language commonly used for exchanging hierarchical data.

> [!question]- Q0808 — What is JSON?
> JSON is a lightweight data exchange format based on objects, arrays, key-value pairs, strings, numbers, booleans, and null.

> [!question]- Q0809 — Why might JSON be preferred to XML?
> JSON is usually more compact and simpler for web APIs, especially JavaScript-based applications.

> [!question]- Q0810 — Why might XML still be useful?
> XML supports rich structure, schemas, namespaces, transformations, and many established enterprise standards.

> [!question]- Q0811 — What is schema matching?
> The process of finding correspondences between elements of different schemas.

> [!question]- Q0812 — What is schema mapping?
> The process of defining transformations between corresponding elements of different schemas.

> [!question]- Q0813 — What is an ontology in interoperability?
> A formal representation of domain concepts and relationships that can support semantic alignment.

> [!question]- Q0814 — What is REST in service interoperability?
> REST is an architectural style for exposing resources through standard web methods and URIs.

> [!question]- Q0815 — What is GraphQL in service interoperability?
> GraphQL exposes a typed schema where clients specify the exact data they need.

> [!question]- Q0816 — What is correlation in process interoperability?
> Correlation assigns incoming messages to the correct process instance or partner interaction.

> [!question]- Q0817 — What is BPMN used for in interoperability?
> BPMN models business processes, orchestration, collaboration, and message flows between participants.

> [!question]- Q0818 — What is an integration pattern?
> A reusable solution for connecting systems, routing messages, transforming data, or coordinating communication.

> [!question]- Q0819 — What is a message translator pattern?
> An integration pattern that converts messages from one format or schema to another.

> [!question]- Q0820 — What is a content-based router?
> An integration pattern that routes messages based on their content.

> [!question]- Q0821 — What is an aggregator pattern?
> An integration pattern that combines multiple related messages into one.

> [!question]- Q0822 — What is a circuit breaker pattern?
> A resilience pattern that stops calls to a failing service temporarily to avoid cascading failures.

> [!question]- Q0823 — Which interoperability issue is illustrated by this case: two systems both use JSON but different field names?
> Syntactic issues may be partly solved, but schema mapping is still needed.

> [!question]- Q0824 — Which interoperability issue is illustrated by this case: two systems use the same field name with different meanings?
> Semantic interoperability is missing.

> [!question]- Q0825 — Which interoperability issue is illustrated by this case: two hospitals exchange patient records but follow different workflows?
> Organizational interoperability is required.

> [!question]- Q0826 — Which interoperability issue is illustrated by this case: a mobile app calls a backend REST endpoint?
> Service interoperability is involved.

> [!question]- Q0827 — Which interoperability issue is illustrated by this case: a sensor sends data in a proprietary binary format?
> Syntactic interoperability is a challenge.

> [!question]- Q0828 — Which interoperability issue is illustrated by this case: a payment service returns status codes interpreted differently?
> Semantic alignment of status meaning is needed.

> [!question]- Q0829 — Which interoperability issue is illustrated by this case: a supply chain coordinates order, shipment, and invoice messages?
> Process choreography is involved.

> [!question]- Q0830 — Which interoperability issue is illustrated by this case: a central workflow engine invokes services in a fixed order?
> Process orchestration is involved.

> [!question]- Q0831 — Which interoperability issue is illustrated by this case: a system combines relational data and XML documents?
> Data transformation and data integration are required.

> [!question]- Q0832 — Which interoperability issue is illustrated by this case: an API gateway exposes multiple backend services?
> Service integration and interface management are involved.

> [!question]- Q0833 — Why does Environmental Monitoring System need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0834 — Give one syntactic interoperability concern in Environmental Monitoring System.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0835 — Give one semantic interoperability concern in Environmental Monitoring System.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0836 — Give one organizational interoperability concern in Environmental Monitoring System.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0837 — Which technologies could support interoperability in Environmental Monitoring System?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0838 — Why does Smart Urban Parking Management System need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0839 — Give one syntactic interoperability concern in Smart Urban Parking Management System.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0840 — Give one semantic interoperability concern in Smart Urban Parking Management System.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0841 — Give one organizational interoperability concern in Smart Urban Parking Management System.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0842 — Which technologies could support interoperability in Smart Urban Parking Management System?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0843 — Why does Smart Health and Wellness System need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0844 — Give one syntactic interoperability concern in Smart Health and Wellness System.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0845 — Give one semantic interoperability concern in Smart Health and Wellness System.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0846 — Give one organizational interoperability concern in Smart Health and Wellness System.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0847 — Which technologies could support interoperability in Smart Health and Wellness System?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0848 — Why does Contact Tracing App need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0849 — Give one syntactic interoperability concern in Contact Tracing App.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0850 — Give one semantic interoperability concern in Contact Tracing App.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0851 — Give one organizational interoperability concern in Contact Tracing App.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0852 — Which technologies could support interoperability in Contact Tracing App?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0853 — Why does University Portal need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0854 — Give one syntactic interoperability concern in University Portal.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0855 — Give one semantic interoperability concern in University Portal.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0856 — Give one organizational interoperability concern in University Portal.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0857 — Which technologies could support interoperability in University Portal?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0858 — Why does E-learning Platform need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0859 — Give one syntactic interoperability concern in E-learning Platform.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0860 — Give one semantic interoperability concern in E-learning Platform.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0861 — Give one organizational interoperability concern in E-learning Platform.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0862 — Which technologies could support interoperability in E-learning Platform?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0863 — Why does Supply Chain Platform need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0864 — Give one syntactic interoperability concern in Supply Chain Platform.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0865 — Give one semantic interoperability concern in Supply Chain Platform.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0866 — Give one organizational interoperability concern in Supply Chain Platform.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0867 — Which technologies could support interoperability in Supply Chain Platform?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0868 — Why does Smart Manufacturing System need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0869 — Give one syntactic interoperability concern in Smart Manufacturing System.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0870 — Give one semantic interoperability concern in Smart Manufacturing System.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0871 — Give one organizational interoperability concern in Smart Manufacturing System.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0872 — Which technologies could support interoperability in Smart Manufacturing System?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0873 — Why does Gym Management App need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0874 — Give one syntactic interoperability concern in Gym Management App.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0875 — Give one semantic interoperability concern in Gym Management App.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0876 — Give one organizational interoperability concern in Gym Management App.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0877 — Which technologies could support interoperability in Gym Management App?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

> [!question]- Q0878 — Why does BikeWare need interoperability?
> It must exchange and use information across clients, backend services, databases, external systems, devices, or organizational actors.

> [!question]- Q0879 — Give one syntactic interoperability concern in BikeWare.
> A syntactic concern is agreeing on data formats and schemas, such as JSON/XML payloads, sensor messages, or API request structures.

> [!question]- Q0880 — Give one semantic interoperability concern in BikeWare.
> A semantic concern is ensuring that fields, codes, statuses, measurements, and domain concepts have the same meaning across systems.

> [!question]- Q0881 — Give one organizational interoperability concern in BikeWare.
> An organizational concern is coordinating roles, workflows, permissions, responsibilities, and message timing across actors or organizations.

> [!question]- Q0882 — Which technologies could support interoperability in BikeWare?
> REST or GraphQL APIs, JSON/XML formats, schema definitions, message brokers, BPMN process models, and authentication standards can support interoperability.

## 09 — Exam-Style Integrated Practice

> [!question]- Q0883 — Exam exercise: how would you start the requirements section for Environmental Monitoring System?
> State assumptions, identify actors (researchers, administrators, environmental authorities), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0884 — Exam exercise: what architecture diagram should you describe for Environmental Monitoring System?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0885 — Exam exercise: what SCRUM structure would fit Environmental Monitoring System?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0886 — Exam exercise: what are the main data entities in Environmental Monitoring System?
> Likely entities include users, roles, sensor data, alerts, reports, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0887 — Exam exercise: which quality requirements are important for Environmental Monitoring System?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0888 — Exam exercise: how would you validate Environmental Monitoring System with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0889 — Exam exercise: give three risks for Environmental Monitoring System.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0890 — Exam exercise: give one user story for an administrator in Environmental Monitoring System.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0891 — Exam exercise: give one user story for an end user in Environmental Monitoring System.
> As an end user, I want to access the main service of Environmental Monitoring System, so that I can complete my goal quickly and reliably.

> [!question]- Q0892 — Exam exercise: how would you test Environmental Monitoring System before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0893 — Exam exercise: how would you start the requirements section for Smart Urban Parking Management System?
> State assumptions, identify actors (drivers, administrators, city planners), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0894 — Exam exercise: what architecture diagram should you describe for Smart Urban Parking Management System?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0895 — Exam exercise: what SCRUM structure would fit Smart Urban Parking Management System?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0896 — Exam exercise: what are the main data entities in Smart Urban Parking Management System?
> Likely entities include users, roles, parking availability, reservations, payments, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0897 — Exam exercise: which quality requirements are important for Smart Urban Parking Management System?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0898 — Exam exercise: how would you validate Smart Urban Parking Management System with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0899 — Exam exercise: give three risks for Smart Urban Parking Management System.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0900 — Exam exercise: give one user story for an administrator in Smart Urban Parking Management System.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0901 — Exam exercise: give one user story for an end user in Smart Urban Parking Management System.
> As an end user, I want to access the main service of Smart Urban Parking Management System, so that I can complete my goal quickly and reliably.

> [!question]- Q0902 — Exam exercise: how would you test Smart Urban Parking Management System before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0903 — Exam exercise: how would you start the requirements section for Smart Health and Wellness System?
> State assumptions, identify actors (users, system operators, third-party health services), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0904 — Exam exercise: what architecture diagram should you describe for Smart Health and Wellness System?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0905 — Exam exercise: what SCRUM structure would fit Smart Health and Wellness System?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0906 — Exam exercise: what are the main data entities in Smart Health and Wellness System?
> Likely entities include users, roles, vital parameters, goals, recommendations, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0907 — Exam exercise: which quality requirements are important for Smart Health and Wellness System?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0908 — Exam exercise: how would you validate Smart Health and Wellness System with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0909 — Exam exercise: give three risks for Smart Health and Wellness System.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0910 — Exam exercise: give one user story for an administrator in Smart Health and Wellness System.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0911 — Exam exercise: give one user story for an end user in Smart Health and Wellness System.
> As an end user, I want to access the main service of Smart Health and Wellness System, so that I can complete my goal quickly and reliably.

> [!question]- Q0912 — Exam exercise: how would you test Smart Health and Wellness System before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0913 — Exam exercise: how would you start the requirements section for BikeWare?
> State assumptions, identify actors (competitive rider and optional sensor devices), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0914 — Exam exercise: what architecture diagram should you describe for BikeWare?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0915 — Exam exercise: what SCRUM structure would fit BikeWare?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0916 — Exam exercise: what are the main data entities in BikeWare?
> Likely entities include users, roles, ride data, rider profile, graphs, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0917 — Exam exercise: which quality requirements are important for BikeWare?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0918 — Exam exercise: how would you validate BikeWare with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0919 — Exam exercise: give three risks for BikeWare.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0920 — Exam exercise: give one user story for an administrator in BikeWare.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0921 — Exam exercise: give one user story for an end user in BikeWare.
> As an end user, I want to access the main service of BikeWare, so that I can complete my goal quickly and reliably.

> [!question]- Q0922 — Exam exercise: how would you test BikeWare before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0923 — Exam exercise: how would you start the requirements section for Contact Tracing App?
> State assumptions, identify actors (citizens, healthcare operators, backend operators), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0924 — Exam exercise: what architecture diagram should you describe for Contact Tracing App?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0925 — Exam exercise: what SCRUM structure would fit Contact Tracing App?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0926 — Exam exercise: what are the main data entities in Contact Tracing App?
> Likely entities include users, roles, exposure events, positive case validation, notifications, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0927 — Exam exercise: which quality requirements are important for Contact Tracing App?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0928 — Exam exercise: how would you validate Contact Tracing App with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0929 — Exam exercise: give three risks for Contact Tracing App.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0930 — Exam exercise: give one user story for an administrator in Contact Tracing App.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0931 — Exam exercise: give one user story for an end user in Contact Tracing App.
> As an end user, I want to access the main service of Contact Tracing App, so that I can complete my goal quickly and reliably.

> [!question]- Q0932 — Exam exercise: how would you test Contact Tracing App before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0933 — Exam exercise: how would you start the requirements section for University Exam Booking System?
> State assumptions, identify actors (students, professors, administrative staff), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0934 — Exam exercise: what architecture diagram should you describe for University Exam Booking System?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0935 — Exam exercise: what SCRUM structure would fit University Exam Booking System?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0936 — Exam exercise: what are the main data entities in University Exam Booking System?
> Likely entities include users, roles, exam sessions, bookings, career data, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0937 — Exam exercise: which quality requirements are important for University Exam Booking System?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0938 — Exam exercise: how would you validate University Exam Booking System with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0939 — Exam exercise: give three risks for University Exam Booking System.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0940 — Exam exercise: give one user story for an administrator in University Exam Booking System.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0941 — Exam exercise: give one user story for an end user in University Exam Booking System.
> As an end user, I want to access the main service of University Exam Booking System, so that I can complete my goal quickly and reliably.

> [!question]- Q0942 — Exam exercise: how would you test University Exam Booking System before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0943 — Exam exercise: how would you start the requirements section for Movie Group Decision App?
> State assumptions, identify actors (individual users and groups of friends), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0944 — Exam exercise: what architecture diagram should you describe for Movie Group Decision App?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0945 — Exam exercise: what SCRUM structure would fit Movie Group Decision App?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0946 — Exam exercise: what are the main data entities in Movie Group Decision App?
> Likely entities include users, roles, preferences, watchlists, shared shortlist, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0947 — Exam exercise: which quality requirements are important for Movie Group Decision App?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0948 — Exam exercise: how would you validate Movie Group Decision App with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0949 — Exam exercise: give three risks for Movie Group Decision App.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0950 — Exam exercise: give one user story for an administrator in Movie Group Decision App.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0951 — Exam exercise: give one user story for an end user in Movie Group Decision App.
> As an end user, I want to access the main service of Movie Group Decision App, so that I can complete my goal quickly and reliably.

> [!question]- Q0952 — Exam exercise: how would you test Movie Group Decision App before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0953 — Exam exercise: how would you start the requirements section for Gym Management App?
> State assumptions, identify actors (members, trainers, reception staff, administrators), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0954 — Exam exercise: what architecture diagram should you describe for Gym Management App?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0955 — Exam exercise: what SCRUM structure would fit Gym Management App?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0956 — Exam exercise: what are the main data entities in Gym Management App?
> Likely entities include users, roles, subscriptions, bookings, workout plans, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0957 — Exam exercise: which quality requirements are important for Gym Management App?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0958 — Exam exercise: how would you validate Gym Management App with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0959 — Exam exercise: give three risks for Gym Management App.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0960 — Exam exercise: give one user story for an administrator in Gym Management App.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0961 — Exam exercise: give one user story for an end user in Gym Management App.
> As an end user, I want to access the main service of Gym Management App, so that I can complete my goal quickly and reliably.

> [!question]- Q0962 — Exam exercise: how would you test Gym Management App before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0963 — Exam exercise: how would you start the requirements section for E-learning Platform?
> State assumptions, identify actors (students, teachers, administrators), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0964 — Exam exercise: what architecture diagram should you describe for E-learning Platform?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0965 — Exam exercise: what SCRUM structure would fit E-learning Platform?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0966 — Exam exercise: what are the main data entities in E-learning Platform?
> Likely entities include users, roles, courses, assignments, submissions, feedback, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0967 — Exam exercise: which quality requirements are important for E-learning Platform?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0968 — Exam exercise: how would you validate E-learning Platform with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0969 — Exam exercise: give three risks for E-learning Platform.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0970 — Exam exercise: give one user story for an administrator in E-learning Platform.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0971 — Exam exercise: give one user story for an end user in E-learning Platform.
> As an end user, I want to access the main service of E-learning Platform, so that I can complete my goal quickly and reliably.

> [!question]- Q0972 — Exam exercise: how would you test E-learning Platform before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

> [!question]- Q0973 — Exam exercise: how would you start the requirements section for Smart Home Energy System?
> State assumptions, identify actors (homeowners, devices, energy provider), define main goals, list functional and non-functional requirements, then write user stories with acceptance criteria.

> [!question]- Q0974 — Exam exercise: what architecture diagram should you describe for Smart Home Energy System?
> Describe clients, backend/API, database, authentication, domain services, integrations, notifications, analytics/reporting, and communication protocols.

> [!question]- Q0975 — Exam exercise: what SCRUM structure would fit Smart Home Energy System?
> Organize sprints around increments: setup and MVP, core user functions, admin functions, integrations, analytics, testing, security, and deployment.

> [!question]- Q0976 — Exam exercise: what are the main data entities in Smart Home Energy System?
> Likely entities include users, roles, energy readings, automation rules, reports, configurations, logs, notifications, reports, and external integration records.

> [!question]- Q0977 — Exam exercise: which quality requirements are important for Smart Home Energy System?
> Usability, security, privacy, reliability, performance, maintainability, availability, and interoperability are usually relevant.

> [!question]- Q0978 — Exam exercise: how would you validate Smart Home Energy System with users?
> Use realistic tasks, think aloud sessions, questionnaires, acceptance testing, and possibly a controlled experiment comparing design alternatives.

> [!question]- Q0979 — Exam exercise: give three risks for Smart Home Energy System.
> Requirements ambiguity, external integration failure, privacy/security issues, poor usability, inaccurate data, and schedule pressure are common risks.

> [!question]- Q0980 — Exam exercise: give one user story for an administrator in Smart Home Energy System.
> As an administrator, I want to manage users, configuration, and system data, so that the service remains correct, secure, and operational.

> [!question]- Q0981 — Exam exercise: give one user story for an end user in Smart Home Energy System.
> As an end user, I want to access the main service of Smart Home Energy System, so that I can complete my goal quickly and reliably.

> [!question]- Q0982 — Exam exercise: how would you test Smart Home Energy System before release?
> Combine unit tests, integration tests, system tests, usability evaluation, security checks, performance tests, and acceptance tests.

## 10 — Quick Recap Cards

> [!question]- Q0983 — Quick recap 1: what is Requirement?
> A statement of what the system should do or what quality it should have.

> [!question]- Q0984 — Quick recap 1: what is Stakeholder?
> Anyone affected by or interested in the system.

> [!question]- Q0985 — Quick recap 1: what is Actor?
> An external user or system that interacts with the system.

> [!question]- Q0986 — Quick recap 1: what is Backlog?
> The ordered list of work items for the product.

> [!question]- Q0987 — Quick recap 1: what is Increment?
> The tested product result delivered during a sprint.

> [!question]- Q0988 — Quick recap 1: what is API?
> A defined interface used by software components to communicate.

> [!question]- Q0989 — Quick recap 1: what is Database?
> A persistent store for application data.

> [!question]- Q0990 — Quick recap 1: what is Use case?
> A description of interaction between an actor and the system to achieve a goal.

> [!question]- Q0991 — Quick recap 1: what is Acceptance criterion?
> A condition used to decide whether a story is complete.

> [!question]- Q0992 — Quick recap 1: what is Prototype?
> An early model used for communication, exploration, or evaluation.

> [!question]- Q0993 — Quick recap 1: what is Evaluation?
> The activity of checking whether the design or system works well for users.

> [!question]- Q0994 — Quick recap 1: what is Validation?
> Checking whether the system satisfies real user needs.

> [!question]- Q0995 — Quick recap 1: what is Verification?
> Checking whether the system conforms to specifications.

> [!question]- Q0996 — Quick recap 1: what is Interoperability?
> The ability to exchange information and use it correctly.

> [!question]- Q0997 — Quick recap 1: what is Microservice?
> An independently deployable service built around a business capability.

> [!question]- Q0998 — Quick recap 1: what is Container?
> A lightweight package containing software and its dependencies.

> [!question]- Q0999 — Quick recap 1: what is SysML?
> A modeling language for systems engineering.

> [!question]- Q1000 — Quick recap 1: what is CMMI?
> A model for process improvement and maturity assessment.

