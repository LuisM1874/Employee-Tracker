const mysql = require("mysql");
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Primer-04",
        database: "company_db"
    },
);

db.connect(function(err){
    if (err) throw err;
    console.log("Connected to company database.")
});

// view all departments
viewDepartment = () => {db.query("SELECT * FROM department", function (err, results){
    console.log(results);
    })
};
// view all roles
viewRoles = () => {db.query("SELECT * FROM role", function (err, results){
    console.log(results);
    })
};
// view all employees
viewEmployees = () => {db.query("SELECT * FROM employee", function (err, results){
    console.log(results);
    })
};
// add a department
addDepartment = () => {db.query("INSERT INTO department", function (id, name){
    console.log(`${name} has been added to the department`);
    })
};
// add a role
addRole = () => {db.query("INSERT INTO role", function (id, name){
    console.log(`${name} has been added to the roles`);
    })
};
// add an employee
addEmployee = () => {db.query("INSERT INTO employee", function (id, name){
    console.log(`${name} has been added to the employees`);
    })
};
// update an employee role

module.exports = {
    viewDepartment,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee
};