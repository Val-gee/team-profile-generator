const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should create and instance of an engineer', () => {
        const role = new Intern();
        expect(typeof(role)).toBe('object')
    })
})