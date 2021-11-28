# Microsoft_Engage_2021

## Problem Statement
This is a simple assignment submission application implemented from the 
student side which has features to view the enrolled courses and submit assignments
course wise.

## Tech Stack Used
* React JS 
* Node JS
* Express JS
* MySQL

## Set Up

The front end is the client .To set up the front end,move to the directory frontend and 
run the following command.
#### `npm install`
If there are exisitng modules and dependency issues,then run
#### `npm install --force`
After successful installation you will be able to see node_modules folder and package-lock.json


#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To set up the database, ensure that mySQL is installed in your system and change the password of the database
in the index.js file in the backend folder.
Import the data in the file database.sql using the command:
#### `mysqldump db_name > database.sql`

The backend is the server.To set up the server, move to the directory backend and run the following command.
#### `npm install`
To start the server, run,
#### `node index.js`
The server runs in 3001 port.
After the server starts successfully, you will be able to see "running Server" message in the terminal.

Ensure that the database is also set up to run the Server.


