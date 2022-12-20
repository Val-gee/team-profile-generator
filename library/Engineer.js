const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        const name = this.name;
        const id = this.id;
        const email = this.email

        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github
    };

    getRole() {
        return 'Engineer';
    };

};

module.exports = Engineer;