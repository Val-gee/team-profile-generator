const generateCards = employees => {
    const team = [];

    function managerCard(manager) {
        // card for manager
        return `
        <div class="card" style="width: 18rem;">
            <div class="header card-header text-white bg-primary">
                ${manager.getName()}
                <br>
                ☕ Manager
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber()}</li>
            </ul>
        </div>`
    }

    function internCard(intern) {
        return `
        <div class="card" style="width: 18rem;">
            <div class="header card-header text-white bg-primary">
                ${intern.getName()}
                <br>
                🎓 Intern
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`
    }

    function engineerCard(engineer) {
        return `
        <div class="card" style="width: 18rem;">
            <div class="header card-header text-white bg-primary">
                ${engineer.getName()}
                <br>
                👓 Engineer
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>`
    }

    team.push(employees.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)));
    team.push(employees.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)));
    team.push(employees.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)));

    return team.join('')
}

module.exports = employees => {

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="./style.css">
<title>Team Profile Generator</title>
</head>
<body>
<header>
    <h1 class="text-center text-white bg-danger mb-5">My Team</h1>
</header>
    <div class = "row row-cols-1 row-cols-md-2 g-4 justify-content-center justify-content-around">
${generateCards(employees)}
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>`
}

