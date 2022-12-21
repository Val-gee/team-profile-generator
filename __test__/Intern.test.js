const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should create and instance of an engineer', () => {
        const role = new Intern();
        expect(typeof(role)).toBe('object')
    })
})

test("school", () => {
    const school = 'Rutgers'

    const employee = new Intern ('Valentina', '71', 'val@test.com', school)

    expect(employee.school).toBe('Rutgers')
})

test("getSchool()", () => {
    const school = 'Rutgers'

    const employee = new Intern ('Valentina', '71', 'val@test.com', school)

    expect(employee.getSchool()).toBe('Rutgers')
})

test("getRole()", () => {
    const intern = new Intern()

    expect(intern.getRole()).toBe('Intern')

})