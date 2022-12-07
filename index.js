const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const writeFile = require ('./src/generateHTML');

const ManagerQst = function () {

}
    inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: "Please enter employee's full name",
      },
      {
        type: 'text',
        name: 'id',
        message: "Please enter manager's ID",
      },
      {
            type: 'text',
            name: 'email',
            message: "Please enter employee's email address",
      },
      {
        type: 'text',
        name: 'officeNumber',
        message: "Please enter manager's officeNumber",
      },   
    ])
    .then(function (mgr) {//assign to the manager
       const manager = new Manager(
        mgr.name,
        mgr.id,
        mgr.email,
        mgr.officeNumber
       );
       addTeamMemer(employee)
     });

 
