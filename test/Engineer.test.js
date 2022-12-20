const Engineer = require("../library/Engineer");

describe('Engineer', () => {
    it('should create an instance of an engineer', () => {
        const role = new Engineer();
        expect(typeof(role)).toBe('object')
    })
})