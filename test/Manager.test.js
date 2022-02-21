"use strict";

const Manager = require('../lib/Manager');


test("creates a manager instance", () => {
    const newMan = new Manager('dan', 90, 'dandaman@gmail.com')
    expect(newMan.name).toBe('dan');
    expect(newMan.Id).toBe(90);
    expect(newMan.email).toBe('dandaman@gmail.com');
});

