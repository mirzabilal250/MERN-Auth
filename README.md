# MERN Authentication System
```
# MERN stack authentication project with Login, Register, Forgot Password, Reset Password features
# Redux state management in the frontend ( React.js )
# axios api calls for making request to the node.js ( express.js ) server
# Jwt based authentication
# Hashed password saving in the mongoDB database
# Forgot password feature i.e Reset password link will be sent to the user
# Gmail mail functionality
```

## Usage

First of all create .env file in the root project and add the following environment variables:
```
# PORT=5000
# MONGO_URI= your mongo uri connection string from mongodb
# JWT_SECRET= your JWT secret key (which is any string like "hhgwaufguyfguyfg56546464")
# EMAIL_SERVICE=Gmail
# EMAIL_USERNAME= Your Gmail username through which you send mail to register user
# EMAIL_PASSWORD= This part is tricky. First of all enable 2-step verification of your google account (associated with your Gmail) it can be found in your google account security section then generate App Password on your Google account. How to Generate Gmail App Password => I have attach Youtube video link "https://youtu.be/hXiPshHn9Pw" go and watch this to generate APP Password.
# EMAIL_FROM= your Gmail i.e reset password link will be sent from this email to the recipient mail address
```

### Install dependencies

```
# Backend deps
npm install
# Frontend deps
cd client
npm install
```

### Run Server

```
# Backend Server (Local)
npm start / nodemon server.js
# Frontend Server (Local)
cd client(frontend)
npm start
```

