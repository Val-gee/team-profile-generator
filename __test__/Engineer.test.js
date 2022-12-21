//import engineer class with require
const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('should create an instance of an engineer', () => {
        const role = new Engineer();
        expect(typeof (role)).toBe('object')
    })
})

//Test setting github account
test("Github", () => {
    //assign github account to new variable
    const github = 'Val-gee'
    //Instatiate the Employee class, passing a name, id, email, and github variable as arguments, to create an object and assign it to a new variable
    const employee = new Engineer ('Valentina', '71', 'val@test.com', github)
    //expect github to return the string be equal to the value of the github variable
    expect(employee.github).toBe('Val-gee')
})

//test getRole method
test("getRole", () => {
    //assign "Engineer" to a new role variable
    const engineer = new Engineer()
    //Instantiate the Employee class, passing an employee name, id, email, and github as arguments, to create an object and assign it to a new variable
    expect(engineer.getRole()).toBe('Engineer')
})

//test get github method
test("", () => {
    //assign github account to a new variable
    const github = 'Val-gee'
    //Instantiate the Employee class, passing an employee name, id, email, and github as arguments, to create an object and assign it to a new variable
    const employee = new Engineer ('Valentina', '71', 'val@test.com', github)
    //expect getGithub() to return the github name to be equal to the value of the github variable
    expect(employee.getGithub()).toBe('Val-gee')
})