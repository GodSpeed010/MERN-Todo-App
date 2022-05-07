# MERN Todo App
A simple Todo App made to gain more experience with the MERN stack. The frontend is hosted with Firebase hosting, and the backend is hosted on Heroku.

## Getting Started

### Dependencies

* In the backend directory, create a **.env** file to store the MongoDB **ATLAS_URI**. Example:
    ```
    ATLAS_URI="<atlas_uri_here>"
    ```

### Installing

* Run `npm install` in the project directory to install all dependencies for the frontend
* Run `npm install` in the backend directory to install all dependencies for the backend

### Executing program

* In the backend directory, run `npm start` to start the backend server.
* In the project directory, you can run `npm start` to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Notes for Self (Deployment Instructions)
### Frontend
1. Build the app:
    ```
    npm run build
    ```
2. Deploy to Firebase:
    ```
    firebase deploy
    ```
### Backend
1. Commit Changes

2. Push backend to heroku:
    ```
    git subtree push --prefix backend heroku master
    ```
