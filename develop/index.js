// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
        ])
        .then((answers) => {
            const htmlPageContent = generateHTML(answers);
    
            fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        });
}

// Function call to initialize app
init();
