const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should create an instance of a manager', () => {
        const role = new Manager;
        expect(typeof(role)).toBe('object')
    })
})