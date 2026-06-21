
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

Function Points are a size estimation technique used to measure the functional size of a software system from the user’s point of view. They measure the amount of functionality delivered to the user, independently of the programming language or implementation technology.

The first step is to define the application boundary, which separates what is inside the application from external systems. This boundary is necessary to decide whether a logical group of data is internal or external.

Function Point Analysis classifies functions into two main groups.

The first group is **Data Functions**:

- ILF, Internal Logical File: a user-recognizable logical group of data maintained by the application being measured.
    
- EIF, External Interface File: a user-recognizable logical group of data used by the application but maintained by another application.
    

The second group is **Transactional Functions**:

- EI, External Input: an elementary process that enters data or control information into the application and usually updates one or more ILFs.
    
- EO, External Output: an elementary process that sends data outside the application boundary with processing, calculations, derived data or updates.
    
- EQ, External Inquiry: an elementary process that sends data outside the boundary as a simple retrieval, without significant processing or update.
    

To determine the complexity of each function, three counting notions are used:

- DET, Data Element Type: a user-recognizable data field.
    
- RET, Record Element Type: a user-recognizable subgroup of data inside an ILF or EIF.
    
- FTR, File Type Referenced: an ILF or EIF read or maintained by a transactional function.
    

For ILF and EIF, complexity is determined using DET and RET.  
For EI, EO and EQ, complexity is determined using DET and FTR.

After each function has been classified as Low, Average or High, a standard weight is assigned:

|Function Type|Low|Average|High|
|---|--:|--:|--:|
|External Input (EI)|3|4|6|
|External Output (EO)|4|5|7|
|External Inquiry (EQ)|3|4|6|
|Internal Logical File (ILF)|7|10|15|
|External Interface File (EIF)|5|7|10|

The Unadjusted Function Points are obtained by **multiplying the number of functions of each type and complexity by the corresponding weight**, and then **summing** all the results.

For example, if a system has 2 low ILFs, 1 average ILF, 1 low EIF, 4 low EIs, 2 average EIs, 1 average EO and 3 low EQs, the UFP are:

$$
UFP = 2×7 + 1×10 + 1×5 + 4×3 + 2×4 + 1×5 + 3×3 = 63.
$$

If required, an adjustment factor can be applied using general system characteristics to obtain the final adjusted Function Points.

---

COCOMO II, Constructive Cost Model II, is an algorithmic software cost estimation model used to estimate development effort, schedule, staffing and cost from the expected size of a software system and a set of project factors.

COCOMO II can be applied at different estimation levels:

- Application Composition Model: used very early, especially for prototypes, GUI-intensive applications and systems built from components.
    
- Early Design Model: used when the architecture is not fully defined yet, so only a limited set of cost drivers is known.
    
- Post-Architecture Model: used when the software architecture is defined and more detailed information about the system, platform, personnel and project is available.
    

The basic idea is that the effort does not depend only on the size of the software. It also depends on scale factors and effort multipliers.

The simplified effort formula is:

$$
PM = A × Size^E × ΠEM
$$

where:

- **PM** is the effort in person-months;
    
- **A** is a calibration constant;
    
- **Size** is the size of the software, usually expressed in KSLOC;
    
- **E** is an exponent determined by scale factors;
    
- **ΠEM** is the product of effort multipliers.
    

Scale factors influence how the project scales with size. Examples are team cohesion, process maturity, development flexibility, precedentedness and risk resolution. If these factors are worse, the exponent E increases and the effort grows more than proportionally.

Effort multipliers represent product, platform, personnel and project characteristics. Examples are required reliability, product complexity, execution time constraints, analyst capability, programmer capability, tool support and schedule pressure. If these factors make the project harder, their multiplier is greater than 1 and the estimated effort increases.

After estimating the effort, COCOMO II can also estimate the development time:

$$
TDEV = C × PM^F
$$

where TDEV is the estimated development time in months. The average staffing can then be estimated as:
$$

Average staff = PM / TDEV
$$

Function Points and COCOMO II answer different questions, but they are connected. Function Points estimate the functional size of the system from the user’s point of view, independently of the programming language. COCOMO II estimates the effort and schedule needed to develop the software.

The typical relationship is:

Requirements and features → Function Points → LOC/KSLOC → COCOMO II → PM and TDEV

Function Points can be converted into LOC or KSLOC using a language-dependent conversion factor. Then KSLOC is used as the size input of COCOMO II, together with scale factors and effort multipliers, to estimate effort, development time and cost.

---


# Question 1 (Software Quality)

- Describe the general concept of software quality and possible definitions/ standards, also providing examples
- Enumerate the quality of the ISO 25010, for each of them provide the definition and possible ways to measure

# Question 3 (DEV-OPS)


# Answers Q1

Quality can be defined as the **degree** to which a system, component or process **meets specified requirements and satisfies user needs and expectations**. Quality can also refers to **non-functiona**l and **functional requirements**. 

The SQA (Software Quality Assurance) is the function that assures standards, processes and procedures are appropriate for the project and are correctely implemented.

ISO/IEC **25010** replaced ISO/IEC 9126. ISO/IEC defines two quality models:
- **Quality in use models**: quality perceived when the product is used in a specific context. (What the user perceive when using the product in its actual context)
	- Effectiveness, Proportion of reached objectives
	- Efficiency, Objectives achieved per unit of effort or manpower
	- Satisfaction, Questionnaries, often with Likert scales
	- Freedom for risk, Safety incident rates, financial loss rates, normalized incident rates
	- Context Coverage, Ratio of succesfully tested specifified contexts; ratio of successful beyond-context uses.
- **Product quality model**: static and dynamic properties of the software product and computer system. (Concerns static and dynamic properties of software and system behaviuor)
	- Functional Suitabilty - Available functions
	- Performance efficiency - Mean and standard deviation of response time, cpu usage, memory usage...
	- Usability - Time needed to understand software functionalities, learn to main functions
	- Reliability - Mean time between failures
	- Security - Succesfull unauthorized access /attempted; encryption key length as an indicator 
	- Maintenability - Fixed errors per effort; new defects introduced during regression tests
	- Portability - Number of modifications after enviroinment change; installation time; installation problems / installations; training time for replacement


# Answer 3

Dev ops is an operational **model** that combines software development and IT operations to enable continuous delivery of value. Emphasized **collaboration**, **communication**, **automation** and **shared responsability** for quality. 

DevOps is a way to work that unites **Development + Operations**, in other words, it brings together the people **who develop the software and those who deploy**, configure, monitor, and maintain it in production.

plan → code → build → test → release → deploy → operate → monitor → feedback

DevOps is based on **Continuous Integration**, **Delivery and Deployment**.

### Continuos Integration
Is the development **practice** in which developers **integrate code into a shared repo** daily or often several times a day. Each integration is **checked through an automated build and automated tests**.


| CI BENEFITS                                                   | CI DOWNSIDES                                                      |
| ------------------------------------------------------------- | ----------------------------------------------------------------- |
| Early detection of bugs                                       | Automated test suites requrire effort to set up and maintain      |
| Immediate Feedback on the system-wide impact of local changes | Value depends on the quality of tests and code testability        |
| Discipline of frequent automated testing                      | Build queues can slow down developers                             |
| Current build always available for testing, demo or release   | Partial code can break integration tests if not managed carefully |
| Faster release with repeatable processes                      | Build infrastracture has setup and maintenance cost               |

### Continuous Delivery
Means that the software is **always production-ready** during its lifecycle. **Any build that passes the pipeline could be released** to users at the touch of a button.

### Continuous Deployment
Goes one step further: every change that passes the automated tests is automatically **deployed to production**.

---

 ## What is interoperability? Describe a possible layered classification of the different types and then focus on data interoperability 


## Exam-ready answer

**Interoperability** is the ability of two or more systems, products or components to **exchange information** and to **use the information that has been exchanged**. So it is not only “sending data”, but making sure that the receiving system can correctly process and exploit that data. In information systems, interoperability usually concerns **data, services and processes**, not data alone.

A possible layered classification is:

| Layer                                         | Meaning                                                                           | Example                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Technical interoperability**                | Systems can physically/technically communicate                                    | network, HTTP, REST, Bluetooth, Wi-Fi                               |
| **Syntactic interoperability**                | **Systems** use compatible data formats and structures                            | XML, JSON, CSV, relational tables, schemas                          |
| **Semantic interoperability**                 | Systems attach the same meaning to exchanged data                                 | same meaning for “patientId”, “examDate”, “temperature”; same units |
| **Organizational / process interoperability** | Organizations and processes are aligned so the exchange is useful in the workflow | shared procedures, responsibilities, business process choreography  |

The book also describes interoperability through three main concerns: **data, services and processes**. Data interoperability deals with exchanged data and formats; service interoperability deals with APIs and service calls such as REST or GraphQL; process interoperability deals with orchestration and choreography between business processes.

## Focus on data interoperability

**Data interoperability** means that different systems can exchange, transform, integrate and correctly interpret data, even if they use different databases, formats, schemas or vocabularies.

For example, two university systems may both store student information, but one system may use:

```text
student_id, name, surname, birth_date
```

while another uses:

```text
matricola, fullName, dateOfBirth
```

Data interoperability requires solving these differences.

At the **syntactic level**, the problem is the **format** of the data. Systems must agree on, or transform between, formats such as XML, JSON, YAML, BSON, CSV or relational tables. They also need schemas and query/transformation languages, for example SQL for relational data, XPath/XQuery/XSLT for XML.

At the **semantic level**, the problem is the **meaning** of the data. Two fields may have different names but the same meaning, or the same name but different meanings. For example, `date` could mean booking date in one system and exam date in another. Semantic interoperability requires schema matching, mappings, common vocabularies, ontologies, metadata and domain experts.

At the **integration level**, data from different systems must be combined into a coherent view. This may require resolving conflicts such as different identifiers, different units of measure, different date formats, missing values, duplicates or inconsistent records.

A typical data interoperability process is:

```text
Identify data sources
        ↓
Understand formats and schemas
        ↓
Match equivalent concepts
        ↓
Define mappings and transformations
        ↓
Validate exchanged data
        ↓
Integrate and use the data correctly
```

## Short example

A health app receives data from different wearable devices.

One device sends:

```text
heart_rate = 120
```

Another sends:

```text
pulse = 120 bpm
```

A third sends data in another format, maybe XML instead of JSON.

Data interoperability means that the system can understand that `heart_rate` and `pulse` refer to the same concept, convert formats if needed, preserve units, validate the values, and integrate them into the user’s health record.

## Final exam phrase

> Interoperability is the ability of different systems to exchange information and use the exchanged information. It can be classified into technical, syntactic, semantic and organizational interoperability. Technical interoperability concerns communication mechanisms, syntactic interoperability concerns data formats and structures, semantic interoperability concerns the meaning of exchanged information, and organizational interoperability concerns the alignment of processes and responsibilities. Data interoperability focuses on the exchange, transformation, mapping and integration of data across heterogeneous systems, solving problems of format, schema, vocabulary, units and meaning.

---

## Function Points VS COCOMO II

Function Points Analysis is a **method** for measuring the functional size of the functions given to the users. It measure the amount of functionality provided by the application.

We firstly define the **Application Boundary**, what is inside the system being counted and what is outside. 

Function Points are classified into two families: **Data Functions** and **Transactional Functions**.

Data Functions represent the **logical groups** of data used by the application. They are divided into:

- ILF, Internal Logical File: a user-recognizable logical group of data maintained by the application being counted. **It is internal because the application is responsible for creating, updating or deleting that data**. For example, in a library application, the Books file, the Users file and the Loans file can be ILFs if they are managed by the application itself.
    
- EIF, External Interface File: a user-recognizable logical group of data used by the application **but maintained by another application**. The system being counted can read or reference this data, but **it is not responsible for maintaining it**. For example, if the library app reads user identity data from an external university registry, that registry can be counted as an EIF.
    

The main difference between ILF and EIF is therefore **the responsibility for maintenance**: ILFs are maintained inside the application boundary, while EIFs are maintained outside the application boundary.

Transactional Functions represent the elementary processes that cross the application boundary. They are divided into:

- EI, External Input: data or control information **enters the application and usually updates one or more ILFs**. For example, creating a new loan or registering a new user.
    
- EO, External Output: **data leaves the application boundary and includes processing, calculations**, derived data or updates. For example, generating a report of overdue books.
    
- EQ, External Inquiry: **a simple request-response operation that retrieves data without significant processing** and without updating internal data. For example, searching for a book by title.
    

To assign a complexity level to each function, Function Point Analysis uses three counting notions:

- **DET**, Data Element Type: a user-recognizable data field, such as name, date, price, title or identifier.
    
- **RET**, Record Element Type: a user-recognizable subgroup of data inside an ILF or EIF.
    
- **FTR**, File Type Referenced: an ILF or EIF read or maintained by a transactional function.
    

**For Data Functions**, ILF and EIF, complexity is determined using DET and RET.  
**For Transactional Functions**, EI, EO and EQ, complexity is determined using DET and FTR.

After counting these elements, each function is classified as Low, Average or High complexity through the **standard complexity matrices**. Then a standard weight is assigned to each function according to its type and complexity:

|Function Type|Low|Average|High|
|---|--:|--:|--:|
|External Input, EI|3|4|6|
|External Output, EO|4|5|7|
|External Inquiry, EQ|3|4|6|
|Internal Logical File, ILF|7|10|15|
|External Interface File, EIF|5|7|10|

Finally, the Unadjusted Function Points are calculated by multiplying the number of functions of each type and complexity by the corresponding weight, and then summing all the results.



---

COCOMO II instead focuses on measuring the develop time and the effort to build the system. 
