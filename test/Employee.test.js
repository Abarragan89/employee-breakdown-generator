"use strict";

const Employee = require('../lib/Employee.js');

test("create an Employee instance", () => {
    const newEmp = new Employee('ron', 82, 'anthony@gmail.com');
    expect(newEmp.name).toBe('ron');
    expect(newEmp.Id).toBe(82);
    expect(newEmp.email).toBe('anthony@gmail.com');
});
describe("the Employee's Methods", () => {
    test("gets employee's name", () => {
        const newEmp = new Employee('ron', 82, 'anthony@gmail.com');
        expect(newEmp.getName()).toBe('ron');
    });
    test("gets employee's ID", () => {
        const newEmp = new Employee('ron', 82, 'anthony@gmail.com');
        expect(newEmp.getId()).toBe(82);
    });
    test("gets employee's email", () => {
        const newEmp = new Employee('ron', 82, 'anthony@gmail.com');
        expect(newEmp.getEmail()).toBe('anthony@gmail.com');
    });
    test("gets employee's role", () => {
        const newEmp = new Employee('ron', 82, 'anthony@gmail.com');
        expect(newEmp.getRole()).toBe('Employee');
    });
})