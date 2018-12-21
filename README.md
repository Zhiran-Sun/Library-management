# Assignment 2 - Vue app

Name: Zhiran Sun

Student No.:  20082252

## Overview.

It is a website for the manager of a library system, mainly managing the books information and user list.
It has two folders: Client and Server.

## Full description of Web App.
================================================================================
###Client
  Home page
  
    ✓ Some introduction to a manager and guideline( link)
    
  Manage Books page
  
    ✓ allows view books list
    ✓ allows search a book by book name, author, book press or status
    ✓ allows edit a book information
    ✓ allows add a new book
    ✓ allows change a book's status( be borrowed or be returned)
    ✓ allows delete a book
    
  Manage user page
  
    ✓ allows view user list
    ✓ allows delete a user

###Server
 + GET /books - Get all books.
 + GET /books/:id - Get book by its id.
 + GET /books/:name/byName - Get book by its author.
 + GET /books/:press/byPress - Get book by its press.
 + PUT /books/:id/ - Eait one book.
 + PUT /books/:id/status - Change a book's status( be borrowed or be returned) .
 + POST /books/ - Add a new book.
 + DELETE /books/:id - Delete a book from id.
 + GET /users/ - Get all users.
 + DELETE /users/:id - Delete a book from id.

##Appropriate UML Diagrams & Use Cases
See the use case diagram at "library.jpg" file.

##Database Schemas
users:
{_id:String,
user_name:String,
password:String}

books:
{_id:String,
book_name:String,
author:String,
publishing:String,
status:String}

##Video link:
https://youtu.be/HPOGoZyhUyA

##Github link:
https://github.com/Zhiran-Sun/Library-management

## Extra features.

###Client:
Continuous Integration:
https://travis-ci.org/Zhiran-Sun/library-client

Automated Deployment:
quarrelsome-approval.surge.sh

E2E testing by cypress:
$ npx cypress run


###Server:
It is deployed in:
https://node-js-library.herokuapp.com/.

The database is in:
mongodb://admin:123456a@ds127604.mlab.com:27604/mylib

Continuous Integration and Test results:
https://travis-ci.org/Zhiran-Sun/libraryServer

test coverage results on Coveralls:
https://coveralls.io/github/Zhiran-Sun/libraryServer

