const inquirer = require("inquirer");
const preparedStatements = require("./preparedStatements.js");
const { viewDepartment } = require("./preparedStatements.js");

const questions = [
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", 
            "Add a department", "Add a role", "Add an employee",
            "Update an employee role", "EXIT"]
    }];

let userInput = async (data) => {
    //Switch statement to compare user input to values
    switch(data.userChoice){
    case "View all departments":
        viewDepartment();    
        break;
    case "View all roles":
        viewRoles();
        break;
    case "View all employees":
        viewEmployees();
        break;
    case "Add a department":
        const newDepartment = await inquirer.prompt([
            {
                type: "input",
                name: "addDepartment",
                message: "Please type the name of the department you wish to add",
            },
        ]);
        addDepartment(newDepartment.addDepartment);
        break;
    case "Add a role":
        const newRole = await inquirer.prompt([
            {
                type: "input",
                name: "addRole",
                message: "Please type the name of the role you wish to add",
            },
        ]);
        addRole(newRole.addRole);
        break;
    case "Add an employee":
        const newEmployee = await inquirer.prompt([
            {
                type: "input",
                name: "addEmployee",
                message: "Please type the name of the employee you wish to add",
            },
        ])
        addEmployee(newEmployee.addEmployee);
        break;
    case "Update an employee role":
        // Execute SQL function
        break;
    case "Exit":
        break;
    default:
        console.log(`Error, please run "node index.js again.`);
    }
    return "";

}


module.exports = {
    questions,
    userInput
};