"use strict";

const Manager = require('../lib/Manager');


test("creates a manager instance", () => {
    const newMan = new Manager('dan', 90, 'dandaman@gmail.com', 439)
    expect(newMan.name).toBe('dan');
    expect(newMan.Id).toBe(90);
    expect(newMan.email).toBe('dandaman@gmail.com');
    expect(newMan.officeNumber).toBe(439);
});
test("gets role from Manager", () => {
    const newMan = new Manager();
    expect(newMan.getRole()).toBe("Manager");
})




