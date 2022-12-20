const Employee = require("./Employee")

class Intern extends Employee {
    getSchool(){
        return this.school
    };

    getRole(){
        return 'Intern';
    };
};

module.exports = Intern;