const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('should create an instance of an employee', () => {
        const role = new Employee();
        expect(typeof(role)).toBe('object')
    })
})

test("name", () => {
    const name = 'Valentina';

    const employee = new Employee (name, '12', 'val@test.com');

    expect(employee.name).toBe('Valentina')
})

test("id", () => {
    const id = '12';

    const employee = new Employee ('Valentina', id, 'val@test.com');

    expect(employee.id).toBe('12')
})

test("email", () => {
    const email = 'val@test.com';

    const employee = new Employee ('Valentina', '12', email);

    expect(employee.email).toBe('val@test.com')
})

test("getName()", () => {
    const name = 'Valentina';

    const employee = new Employee (name, '12', 'val@test.com');

    expect(employee.getName()).toBe('Valentina')
})

test("getId()", () => {
    const id = '12';

    const employee = new Employee ('Valentina', id, 'val@test.com');

    expect(employee.getId()).toBe('12')
})

test("getEmail()", () => {
    const email = 'val@test.com';

    const employee = new Employee ('Valentina', '12', email);

    expect(employee.getEmail()).toBe('val@test.com')
})

test("getRole()", () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
})