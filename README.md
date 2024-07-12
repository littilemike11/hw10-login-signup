# HW 10 - Sign Up and Log In

## Summary

This project consists of a sign up and login sheet. The user can sign up to create an account. Their info is stored. Then they can log in with the correct credentials.

## How to Run

1. clone the project

```
git clone https://github.com/littilemike11/hw10-login-signup.git
```

2. install modules

```
npm install
```

## How it Works

### Routes / Pgs

The program uses react dom browser router and router provider to create routes to the different pages. The "parent" or root component is App, and it consists of 3 children : Home, Log In and Sign Up. This is so that data can be passed to the different routes using useContext.

1. App - the root component that displays all the other children and the navbar. Defines a useState variable for isLoggedIn and stores it in local storage.

2. Home - the default child of App. Index = true, meaning that app automatically points to Home pg. Home displays the Hero component and the user's info if the user is logged in.

3. Sign up - can be accessed on hero component when "get Started" button is pressed while not logged in. Here the user can create an account. They will complete a form for username, password, bio and other personal info. It also defined useState variables for users[] and userCount. Users is an array of objects that stores all the users that are created and stores it in local storage. UserCount is the length of the users array. On complete, navigates back to home pg.

4. Log in - can be accessed on nav bar with "log in" button. Here the user can log into their account by entering their username and password that was created using sign up component. Once their account is verified, they are sent to home pg with corresponding userID, with the isLoggedIn variable set as true.

### Other Components

- Hero - a welcome message to user. If not logged in, shows "get Started" button which links to Sign Up pg. If logged in, that button and other text is hidden.

- NavBar - a navigation component with two buttons. Hw10 links to home and Log In links to log in pg while user is not logged in ( isLoggedIn = false). But, while isLogged=true, the button says "log out" which links to home and will set isLoggedIn =false.

### Local Storage Variables

1. isLoggedIn - boolean - determines if user is logged in or not
2. users - array of objects - array that stores created users
3. userCount - length of users
4. userId - get id of user to know which user is currently signed in, to display correct data.

### Functions

- createUser(form) - given a form object, create a user object with those values
