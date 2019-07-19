"use strict"

let students = [];
let list = "";
let inputs = document.getElementsByClassName("student-input");

function Student(name, surname, email, phone, age) {
    this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone,
        this.age = age
}

function generateLiItems(value, index) {
    list += `<tr><th>${index + 1}</th><td>${value.name}</td><td>${value.surname}</td><td>${value.email}</td><td>${value.phone}</td><td>${value.age}</td></tr>`;
}

function reset() {
    list = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
}

function getInputValues(value) {

    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value) {
        students.push(student);
        getWriteList();
        return document.getElementById("alertError").innerHTML = ""
    } else {
        return document.getElementById("alertError").innerHTML = "Fill All Cells"
    }
}

function getWriteList() {
    students.forEach(generateLiItems);
    document.getElementsByClassName("student-list")[0].innerHTML = list;
    reset();
}

// When Onclick Sorted

function sortedListName() {
    return function (a, b) {
        if (a["name"] < b["name"]) { return -1; } else if (a["name"] > b["name"]) { return 1 } else { return 0; }
    }
}
function sortedListSurName() {
    return function (a, b) {
        if (a["surname"] < b["surname"]) { return -1; } else if (a["surname"] > b["surname"]) { return 1 } else { return 0; }
    }
}
function sortedListEmail() {
    return function (a, b) {
        if (a["email"] < b["email"]) { return -1; } else if (a["email"] > b["email"]) { return 1 } else { return 0; }
    }
} function sortedListPhone() {
    return function (a, b) {
        if (a["phone"] < b["phone"]) { return -1; } else if (a["phone"] > b["phone"]) { return 1 } else { return 0; }
    }
} function sortedListAge() {
    return function (a, b) {
        if (a["age"] < b["age"]) { return -1; } else if (a["age"] > b["age"]) { return 1 } else { return 0; }
    }
}

function nameSort() {
    students.sort(sortedListName());
    getWriteList();
}

function SurnameSort() {
    students.sort(sortedListSurName());
    getWriteList();
}

function emailSort() {
    students.sort(sortedListEmail());
    getWriteList();
} 

function phoneSort() {
    students.sort(sortedListPhone());
    getWriteList();
}

function ageSort() {
    students.sort(sortedListAge());
    getWriteList();
}

// Random Sorted

/*function randomSort() {
    let random = Math.floor(Math.random * 10)
    students.sort(function (a, b) { return random });
    getWriteList();
}*/
