/*
Filename: ComplexApp.js
Description: A complex application that manages a user database with features like login, user creation, and user search.
*/

// Import required modules
const readline = require('readline');
const fs = require('fs');

// Create a database array to store user objects
let users = [];

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their action
rl.question('What would you like to do? (login/create/search) ', (answer) => {
  if (answer === 'login') {
    // Call the login function
    login();
  } else if (answer === 'create') {
    // Call the create user function
    createUser();
  } else if (answer === 'search') {
    // Call the search user function
    searchUser();
  } else {
    console.log('Invalid action. Please try again.');
    rl.close();
  }
});

// Function to handle user login
function login() {
  rl.question('Enter your username: ', (username) => {
    rl.question('Enter your password: ', (password) => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        console.log('Login successful!');
      } else {
        console.log('Incorrect username or password. Please try again.');
      }
      rl.close();
    });
  });
}

// Function to create a new user and add them to the database
function createUser() {
  rl.question('Enter a username for the new user: ', (username) => {
    rl.question('Enter a password for the new user: ', (password) => {
      const newUser = { username, password };
      users.push(newUser);
      console.log('User created successfully!');
      rl.close();
    });
  });
}

// Function to search for a user in the database
function searchUser() {
  rl.question('Enter the username to search for: ', (username) => {
    const user = users.find(u => u.username === username);
    if (user) {
      console.log(`User found: ${user.username}`);
    } else {
      console.log('User not found.');
    }
    rl.close();
  });
}