// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// use module.exports to connect variable generateMarkdown and include function from external file
const generateMarkdown = require('./utils/generateMarkdown.js'); 

const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = ['title', 'description', 'install', 'usage', 'license', 'contribute', 'tests', 'questions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully created README.md!')); 
    /* Ternary operation 
    (fileName, data, function(err) {
        if (err) {
            console.log(err) 
        } else {
            console.log('Successfully created README.md!');
        }
    } */
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        /*{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How would the user install your project?',
        },
        {
            type: 'confirm',
            name: 'usage',
            message: 'Do you have screenshots or video of your project in use?',
        },*/
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project use?',
            choices: ['Apache 2.0', 'MIT', 'GPL', 'MPL 2.0','None'],
        },
        /*{
            type: 'input',
            name: 'contribute',
            message: 'What are your guidelines for developers to contribute?',
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Are you able to provide examples of your project in use?',
        },        
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },*/
        ])
        .then((answers) => {
            const readmePageContent = generateMarkdown(answers);
    
            writeToFile('README.md', readmePageContent);
        });
}

// Function call to initialize app
init();
