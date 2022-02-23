"use strict";

const Engineer = require('../lib/engineer');
describe("make an engineer object", () => {
    test("creates a engineer instance", () => {
        const newEng = new Engineer('dan', 90, 'dandaman@gmail.com', 'abarragan89')
        expect(newEng.name).toBe('dan');
        expect(newEng.Id).toBe(90);
        expect(newEng.email).toBe('dandaman@gmail.com');
        expect(newEng.github).toBe('abarragan89');
    });
})

describe("Engineer's Methods", () => {
    test("gets role from engineer", () => {
        const newEng = new Engineer();
        expect(newEng.getRole()).toBe("Engineer");
    })
    test("get Github from Engineer", () => {
        const newEng = new Engineer('dan', 90, 'dandaman@gmail.com', 'abarragan89');
        expect(newEng.getGithub()).toBe("abarragan89")
    });
})

