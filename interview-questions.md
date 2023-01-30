# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: student model, cohort_id

Researched answer: I would add the forigen key in the student model and its name would be cohort_id. im not sure i fully understand this one. 

2. Which RESTful routes must always be passed params? Why?

Your answer: GET, PUT, PATCH, and DELETE, im not sure...

Researched answer: they must always be passed params  because they work on specific data that is usally identified by ID or name. 

3. Name three rails generator commands. What is created by each?

Your answer: rails genrate model rails generate controller. 

Researched answer: 
rails generate controller -creates a new controller in a Ruby on Rails application, which is responsible for handling incoming HTTP requests and returning responses.

rails genrate model -creates a new model in a Ruby on Rails application, along with a corresponding database migration. 


rails generate scaffold -  creates a full set of controllers, models, and views for a resource in a Ruby on Rails application, along with a corresponding database migration.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

 index, retrieves all data

action: "POST" location: /students 

create, create a new student resource in the database using information passed in the request body.


action: "GET" location: /students/new 

new, it would perform the action of displaying a form for creating a new student resource.

action: "GET" location: /students/2

 show, it would retrieve and display a single student resource with an ID of 2.

action: "GET" location: /students/2/edit

 edit, it would perform the action of displaying a form for editing the student resource with an ID of 2.

action: "PATCH" location: /students/2 

update, it would perform the action of updating the student resource with an ID of 2 
action: "DELETE" location: /students/2

 destroy, it would delete the student resorce wiht a ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

okay!
