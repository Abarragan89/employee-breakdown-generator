"use strict";

const Intern = require("../lib/Intern");

test("create an Intern instance", () => {
    const newInt = new Intern("James", 293, "james@gmail.com", "Loyola Marymount")
    expect(newInt.name).toBe("James");
    expect(newInt.Id).toBe(293);
    expect(newInt.email).toBe("james@gmail.com");
    expect(newInt.school).toBe("Loyola Marymount");
});

test("Intern's Methods", () => {
    const newInt = new Intern("James", 293, "james@gmail.com", "Loyola Marymount");
    expect(newInt.getSchool()).toBe("Loyola Marymount");
});

test("get Intern role", () => {
    const newInt = new Intern("James", 293, "james@gmail.com", "Loyola Mary Mount");
    expect(newInt.getRole()).toBe("Intern");
});