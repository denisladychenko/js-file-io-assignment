'use strict'

const fs = require('fs')

class Employee {
  
//constructor for the class
  constructor(obj) {
    // TODO
    this.name = obj.name;
    this.title = obj.title;
    this.salary = obj.salary;
   }
   //parses data from the specified directory
  static parseFromFilePath(dir){
    const unpData = fs.readFileSync(dir);
    const empObj = JSON.parse(unpData);
    return new Employee(empObj);
  }

//changes title and salary of the employee object
  promote(title, salary){
    setTitle(this, title);
    setSalary(this, salary);
   
  }

 
  // TODO ???
}

// set title for the object
const setTitle = (obj, title) => {
  obj.title = title;
}
//sets salary for the object
const setSalary = (obj, salary) => {
  obj.salary = salary;
}

module.exports = {
  Employee
}
