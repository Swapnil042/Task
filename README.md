# Task
Backend service built with Node.js, Express.js, MongoDB and various npm packages.

Backend service built with nodejs, Express.js, MongoDB and Mongoose. The server is built with Express.js. Two Mongoose models are designed to store user
information and their tasks. Validation is performed within the Mongoose models with the help of validator.js. User authentication is integrated with JWT.
Filtering and Pagination features are implemented so that user can filter tasks to get the desired ones. User can upload picture and the picture gets resized
with sharp.js. Sendgrid email service is integrated in this project. When users create or delete their accounts, an email gets sent to their email accounts. 
env-cmd npm package is used as a development dependency to manage environmental variables. All routes were tested by sending off requests from Postman.
Jest testing framework is used to test codes.

Tools:
    Node.js, Express.js, MongoDB, Postman
   
npm packages: mongoose, bcryptjs, validator,
multer, sharp, jsonwebtoken, @sendgrid/mail,
env-cmd, nodemon, mongoose

Open the project and run the command "npm install" and all set.
If any error shows up then delete the package-lock.json and try "npm install" again.
