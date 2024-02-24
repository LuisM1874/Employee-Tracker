const inquirer = require("inquirer");
const fs = require("fs");
const inquirerQuestions = require("./lib/questions.js");
const questions = inquirerQuestions.questions;
const userInput = inquirerQuestions.userInput;
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const askQuestions = (data) => inquirer.prompt(questions)
    .then(data => {
        if(data.EXIT) {
            return process.exit();
        } else {
        const nextQuestion = userInput(data)
        return userInput(data);
    }
});

askQuestions()
