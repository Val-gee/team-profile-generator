const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('should create an instance of an employee', () => {
        const role = new Employee();
        expect(typeof(role)).toBe('object')
    })
})