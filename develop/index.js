// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['title', 'description', 'installation', 'usage', 'license', 'contributing', 'tests', 'questions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        {
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
            name: 'installation',
            message: 'What are the steps to installing your software?',
        },
        {
            type: 'confirm',
            name: 'usage',
            message: 'Do you have screenshots or video of your software in use?',
            choices: ['Yes','No'],
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project use?',
            choices: ['Apache 2.0', 'MIT', 'GPL', 'Mozilla Public License 2.0','None'],
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
        },
        ])
        .then((answers) => {
            const readmePageContent = generateHTML(answers);
    
            fs.writeFile('README.md', readmePageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}

// Function call to initialize app
init();
