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
    this.info = function(){
        return `<tr><th>${index + 1}</th><td>${this.name}</td><td>${this.surname}</td><td>${this.email}</td><td>${this.phone}</td><td>${this.age}</td></tr>`
    }
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
    document.getElementById("alert").style.display = "none";
    document.getElementById("alert-number").style.display = "none";
}

function getInputValues() {

    let student = new Student(inputs[0].value.toUpperCase(), inputs[1].value.toUpperCase(), inputs[2].value.toUpperCase(), inputs[3].value, inputs[4].value);
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value) {
        if(inputs[4].value > 0){
        students.push(student);
        getWriteList();
         document.getElementById("alert").style.display = "none";
         return document.getElementById("alert-number").style.display = "none";
         
        }else{
            document.getElementById("alert").style.display = "none";
            return document.getElementById("alert-number").style.display = "block"
        }
    }else {
        document.getElementById("alert-number").style.display = "none";
        return document.getElementById("alert").style.display = "block";
    }
}

function getWriteList() {
    students.forEach(generateLiItems);
    document.getElementsByClassName("student-list")[0].innerHTML = list;
    reset();
}



// When Onclick Sorted

function sortedMetod(value) {
    return function (a, b) {
        if (a[value] < b[value]) { return -1; } else if (a[value] > b[value]) { return 1 } else { return 0; }
    }
}

function sortedList(value) {
    students.sort(sortedMetod(value));
    getWriteList();
}

// Random Sorted

function randomSort(){
    students.sort(myFunct());
    getWriteList();
}
function myFunct(){
    let random = Math.random() - 0.5;
    return function () {
        return random;
      }
}
