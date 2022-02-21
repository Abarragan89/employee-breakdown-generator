"use strict";

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.Id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.Id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;