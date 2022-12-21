const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should create an instance of a manager', () => {
        const role = new Manager;
        expect(typeof(role)).toBe('object')
    })
})

test("officeNumber", () => {
    const officeNum = '12';

    const employee = new Manager ('Valentina', '71', 'val@test.com', officeNum);

    expect(employee.officeNum).toBe('12')
});

test("officeNumber()", () => {
    const officeNum = "12";

    const employee = new Manager('Valentina', '71', 'val@test.com', officeNum);

    expect(employee.officeNumber()).toBe('12');
});

test("getRole()", () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');

});