const result = document.querySelector(".js-result");
const form = document.querySelector(".js-form");
const ageSelection = document.querySelector(".js-ageSelect")

function parseAsJson(data) {
    return data.json() 
}

function displayUsersJson(users) {
    let html = '';
    for (let user of users.results) {
        html += `
        <li class="random-user-box">
            <img src="${user.picture.medium}" />
            <h5>${user.name.first} ${user.name.last}</h5>
            <p>${user.dob.age}</p>
        </li>
        `;
    }
    result.innerHTML = html;
}

function errorHandling() {
    //add error message
}

function displayRandomUserData() {
    fetch("https://randomuser.me/api/?results=20")
    .then(parseAsJson)
    .then(displayUsersJson)
    .catch(errorHandling);
}

function handleSubmit(event) {
    event.preventDefault();
    displayRandomUserData();
}


form.addEventListener('submit', handleSubmit);

