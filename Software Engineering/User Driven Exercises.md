
**Hierarchical Task Analysis: Borrow an ebook from a local library app**

0. Borrow an ebook from a local library app
    
    1. **Access the local library app**  
        1.1 Open the app  
        1.2 Log in, if required
        
    2. **Find the desired ebook**  
        2.1 Open the search/catalog section  
        2.2 Enter search criteria, such as title, author, or genre  
        2.3 Browse the search results  
        2.4 Select the desired ebook
        
    3. **Check ebook availability**  
        3.1 Read the ebook details  
        3.2 Check whether the ebook is available for borrowing
        
    4. **Borrow the ebook**  
        4.1 Press the borrow button  
        4.2 Confirm the borrowing action  
        4.3 Wait for the borrowing confirmation
        
    5. **Access the borrowed ebook**  
        5.1 Open the ebook in the app reader  
        5.2 Or download the ebook for offline reading
        
    6. **Handle unavailable ebook**  
        6.1 Place a hold or reservation  
        6.2 Confirm the reservation  
        6.3 Wait for a notification when the ebook becomes available
        

**Plan 0:** Do 1, 2, and 3 in order. If the ebook is available, do 4 and then 5. If the ebook is not available, do 6.

**Plan 2:** Do 2.1, 2.2, 2.3, and 2.4 in order. If the user already knows the exact title, search directly by title. If the user does not know the exact title, browse by author, category, or genre.

**Plan 4:** Do 4.1, 4.2, and 4.3 in order. If login is required before borrowing, return to 1.2 and then continue from 4.1.

**Plan 6:** Do 6.1 and 6.2. When the system notifies the user that the ebook is available, return to 4.

---
# Exercise 5 - HTA Correction

## **Buy a train ticket**

0. Buy a train ticket
	1. **Access to the ticket app**
		1.1 Open the app
		1.2 login if required 
	2. **Find the buy ticket area**
		2.1 Find the calendar widget 
	3. **Check availabilty**
		3.1 Select the desired date
		3.2 Check whether the train is available for booking
	4. **Book the ticket**
		4.1 Press the buy button
		4.2 confirm the buy action
		4.3 execute the payment
		4.4 wait fot the booking confirmation
	5. **Access the booked ticket**
		5.1 go to tickets
		5.2 check whether the ticket is available in the booked ticker are
	6. **Show the ticket to the controller**
		6.1 Navigate to the email
		6.2 Show the code to the controller
---

# Exam exercises

![](../images/Pasted%20image%2020260611112511.png)

## **Describe ALL the basic elements of SCRUM**

The basci elements of scrum are the roles:

## Roles
- **Product owner**: He is the one who defines **product features**. decides **release content and date**, adjust priorities at every iteration and **accept or reject** work result.
- **Scrum master**: He is the one who ensure that scrum value and practice are applied, remove external impediments and helps the team stay productive.
- **Team**: A team is a group of people made up of 5-9 people, cross-functional, self organizing and ideally full time. Only between sprints member should change.
## Main artifact

- **Product backlog**: The product backlog is a ordered list of functionalities, requirements, bug and improvements
- **Sprint backlog**: The sprint backlog is a list of a subset of the task/features selected for the sprint
- **Increment**: The increment is the working part of the product at the end of the sprint

## Scrum Events
- **Sprint Planning**:
	- The sprint goal is defined 
	- We select the items from the product backlog
	- Sprint Backlog is created
	- The work plan is planned
- **Daily Scrum**: The daily SCRUM is a daily activity and consist in:
	- Monitoring the progress
		- What i've done?
		- What i will do?
		- Impediments?
	- Team alignment
	- **15 minutes every day**
- **Sprint review**: this activity shows the presentation of the increment to the stakeholders, here the team receives feedbacks from them and here is done the update of the backlogs since in every sprint review the stakeholder validates the functions
- **Sprint Retrospective**: This is a brainstorming and the team: 
	- Reflects about the process
	- What worked?
	- What to improve?
	- Actions for the next sprint

## Infostud

Since infostud is huge, i need to make an assumption


> [!DANGER] Assumption
> I assume that the project develops a new mobile/web version of the infostud system, focusing on the main functionalitites for students, secretary and administrators

We need to split the system in **macro-functionalities**

- Auth and managing the student profile
- University careerr
- Exam Registration
- exams session management
- grade recording
- fees and payments
- curricula
- certificates/documents
- notifications

	Every sprints last 4 weeks so 6 sprints = 6 months

# Sprint 1

We need to think at the base. 

- Project setup
- architecture
- database iniziale
- auth
- first UI prototype
- First working flux

**Question:** Which is the minimum version of the system that allows to a student to join and see something useful?


Struttura mentale dello sprint

```
Sprint X
Goal dello sprint:
- Che obiettivo funzionale voglio raggiungere?

Backlog items selezionati:
- Quali feature/user stories realizzo in questo sprint?

Attività interne:
- Analisi dei requisiti specifici
- Design UI/database/API
- Sviluppo
- Testing
- Integrazione

Incremento finale:
- Cosa funziona alla fine dello sprint?
```

Sprint 1:
Goal: Build the base of the system and a first working flux.

**Backlog items:** (i can also write this as a user stories)
- Student login 
- Visualize the student profile
- Initial student dashboard
- Initial database schema for students, courses and exams
- Basic UI navigation structure

**Activities**:
- Analyze login and profile requirements
- design database entities and UI screens
- implement front end, backend and database
- Test auth and profile visualization
- Integrate the first working increment

Increment:
- At the end of the sprint the user should be allowrd to authenticate in Infostud, see the personal dashboard

## Sprint 2
Sprint 2:
Goal: Extend the basic system by allowing students to view their academic career and register for exam sessions.

**Backlog items:** (i can also write this as a user stories)
- View academic career
- View completed exams and grades
- View total CFU obtained
- View available exam sessions
- Register for an exam session

**Activities**:
- Analyze the requirements for exam registration
- Create new enitities representing exams and registration
- Implement the backend logic for registration
- design the user interface
- integrate exam booking with the student dashboard

Increment:
- At the end of this sprint the user should make registration for exams see the career and completed exam and total cfu

## Sprint 3

Sprint 3
Goal: Extend the student services by allowing students to view university fees, payment deadlines, and payment status.

**Backlog items:**
- View university fees
- View payment deadlines
- View payment status
- Download payment receipts
**Activities**:
- Analyze the requirements for fee visualization and payment status
- Design the fees pages, database entitties, and api endpoints for external payment services
- Implement front end and backend components for fees and receipts
- Connect the fees module with the existing student dashboard
**Increment**:
At the end of the sprint, students can access the fees section, view pending and paid fees, check deadlines, and download payment receipts.


## Sprint 4
**Goal**: allow students to view and manage their curriculum or study plan

**Backlog**: 
- View available curricula
- View personal study plan
- Select or modify optional courses
- submit the study plan for approval
- View approval status

**Activities**:
- Analyze the requirements for visualizing curricula info
- design the entities of the database and the functions 
- Design the ui interface and the logic
- Implement front and and backend 
- Test the new features

**Increment**: 
User should manage and view thei curriculum and modify and see the study plan

## Sprint 5

**Goal**: 
Allow students to view and upload documentations like certificates, documents personal ids etc...

**Backlog**:
- View available certificates and documentation
- Request a certificate
- Upload docs and certificates
- Download certificates from the personal area

**Activities:**
- Analyze the requirements for docs and certificates
- Create the entities 
- Design the ui 
- Implement front-end and back-end
- Test

**Increment:**
Students should see their docs, upload certificates and docs and download them

## Sprint 6

**Goal**:
Complete the system with notifications and stabilize the final integrated release.

**Backlog**:
- Receive notifications for exam booking
- Receive notifications for fee deadlines
- Receive notifications for curriculum approval
- Receive notifications for available documents
- Final bug fixing and integration testing
**Activities**:
- Analyze requirements to add notifications feature to the system
- Design the notification entity
- Design the back end and front end notifications
- Test 
**Increment**:
The student should see notifications

---

# Exercise IMMUNI Scrum

![](../images/Pasted%20image%2020260612113626.png)

## **Architecture**

## Mobile app

- Bluetooth Low Energy
- Local Storage of anonymus contacts
- Expose notifications
- User Interface

## Backend Server

<font color="#2DC26B">- Store anonymous keys</font>
<font color="#2DC26B">- provides api to mobile</font>
<font color="#2DC26B">- Sends coordinates notifications</font>
<font color="#2DC26B">- Perform basic analysis statistic</font>

## Healthcare operator web portal

- Login for autorized operators
- Check positive cases
- Upload of infected user keys

## Sprint Division

## Sprint 1

**Goal**:
Build a usable MVP of the mobile app

**Backlog**:
- user interface fully functional
- Auth for users
- notifications mocks 
- set the local storage
- bluetooth service 

**Activities**:
- Analyze requirements for set the initial functions
- Design the backend 
- Design the user entity on the database
- Implement auth logic
- Desing User ui 
- Implement frontend and beckend minimal 

**Increment**:
After the first sprint the the user shouild be able to auth and see minimal informations


## Sprint 2

**Goal**:
Implement full backend with the stabilished functionalities

**Backlog**:
- Anomimous keys storing 
- Connection with the mobile app with apis
- See the cordinates on the mobile app
- See statistics 

**Activities**:
- Analyze requirements for implementing requirements
- Design the api structure
- Design the coordinates
- Implement logic and statistic


**Increment**:
The sprint should produce the full working backend


## Sprint 3

**Goal**:
Allows operators to authenticate and handles the positive cases and see statistics
**Backlog**:
- Login for autorized operators
- Check positives cases
- Operator upload infected user keys

**Activities**:
- Analyze requirements for the healthcare operator side
- Design the operator scheme on the database
- implement auth and link with the app with api
- implement front end and backend 
- implement back end logic for uploading of infected keys
- Test all components with unit tests

**Increment**:
After the third sprint THE mvp should be complete and full working 

---

![](../images/Pasted%20image%2020260612153302.png)
