# 13_Burger_Logger

## Link to video and Screenshots:
[Try out the Burger Logger](https://intense-wildwood-42940.herokuapp.com/)

![Before Burger Being Devoured](https://github.com/MarioThompson0010/13_Burger_Logger/blob/main/screenshots/screenshot1.PNG)
![After Burger Being Devoured](https://github.com/MarioThompson0010/13_Burger_Logger/blob/main/screenshots/afterBeingDevoured.PNG)

List of technologies and methodologies used: Nodejs, npm, inquirer, Mysql, Express, Express-Handlebars, Javascript,    HTML, CSS, Bootstrap, Heroku, Github, MVC, REST

## Description: Burger Logger

This application lets the user enter the names of burgers into a list.  These names represent burgers.  They initially appear on the left hand side of the screen.  The user may "devour" the burger.  The user does this by clicking the "DEVOUR!" button.  After the burger is devoured, the burger appears on the right hand side of the page.

The MVC way of organizing the code was used.  The view consists of Handlebars, HTML, and CSS.  The controller is the next layer down.  It passes information from the view down, eventually, to the object relational model (ORM). However, below the controller lies the model.  The model is a burger.  The burger updates itself via the ORM, then sends information all the way back up to the controller, then up to the view.

The program uses a SQL database to store persistent information.  The user interface is a web page.  See the list of technologies used, above.

## How to run the program:

You can go to Heroku () and run it that way, or follow the following steps to run it on your local machine:

1) Open an integrated terminal in the directory of the server.js file
2) Type "npm i" to install the dependencies
3) Type "node server.js"
4) Enter the name of a burger you want to eat
5) Click the Add Burger button
6) Devour the burger by clicking the DEVOUR! button

## How to test this app

Follow the steps above to run the program.  After you devour a burger, it should appear on the right hand side of the web page.

