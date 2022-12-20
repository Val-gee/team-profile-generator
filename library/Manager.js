const Employee = require ("./Employee");

class Manager extends Employee {
    getOfficeNum(){
        return this.officeNum
    };

    getRole(){
        return 'Manager';
    };
};

module.exports = Manager;