let username = document.querySelector("[name='name']");
let ID = document.querySelector("[name='ID']");
let mob = document.querySelector("[name='mobile']");
let gpa = document.querySelector("[name='GPA']");
let dep = document.querySelector("[name='Department']");
let gender = document.querySelector("[name='Gender']");
let statuss = document.querySelector("[name='Status']");
let level = document.querySelector("[name='Level']");
let form = document.getElementById("form");
let mail = document.querySelector("[name='mail']");
const b1 = document.getElementById("b1");
form.addEventListener('submit', e => {
    e.preventDefault();

    Valid();
});

let err = (element, msg) => {
    element.parentElement.classList.remove('success');
    element.parentElement.classList.add('error');
    let parentEl = element.parentElement.parentElement.querySelector("p");
    parentEl.innerHTML = msg;
    parentEl.style.display = "block";
}
let errselect = (element) => {
    element.classList.remove('success');
    element.classList.add('error-s');

}
let succselect = (element) => {
    element.classList.remove('error-s');

}

let succ = (element) => {
    element.parentElement.classList.remove('error');
    element.parentElement.classList.add('success');
    let parentEl = element.parentElement.parentElement.querySelector("p");
    parentEl.style.display = "none";
}

const Valid = () => {
    if (username.value.length > 52 || username.value.length <= 0) {
        err(username, "name is too long");
    } else {
        succ(username);
    }

    if (ID.value.length != 8) {
        err(ID, "Enter 8 digits only")
    } else {
        succ(ID);
    }
    if (mob.value.length != 11) {
        err(mob, "Invalid mobile number");
    } else {
        succ(mob);
    }

    if (gpa.value.length == 0) {
        err(gpa, "Invalid GPA");
    } else {
        succ(gpa);
    }
    if (mail.value.length == 0) {
        err(mail, "Invalid Mail");
    } else {
        succ(mail);
    }

    if (gender.value == "") {
        errselect(gender);
    } else {
        succselect(gender)
    }

    if (level.value == "") {
        errselect(level);
    } else {
        succselect(level)
    }
    if (statuss.value == "") {
        errselect(statuss);
    } else {
        succselect(statuss);
    }

    if (dep.value == "") {
        errselect(dep);
    } else {
        succselect(dep)
    }
}

b1.onclick = function(){

    localStorage.setItem(username.value, JSON.stringify([ID.value, mob.value, gpa.value, dep.value, gender.value, statuss.value, 
    level.value, form.value, mail.value]));

};
