let username = document.querySelector("[name='name']");
let dep = document.querySelector("[name='Department']");
const b1 = document.getElementById("b1");

let arr = Object.keys(localStorage)
form.addEventListener('submit', e => {
    e.preventDefault();
    if (Valid()) {
        let user = document.getElementById("name")
        let selc = document.querySelector("[name='Department']");
        user.value = ""
        selc.selectedIndex = 0;
    }
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
    let f = 0;
    if (!arr.includes(username.value) || username.value === "") {
        err(username, "Name is Not Found");
        f = 1;
    } else {
        succ(username);
    }
    if (dep.value == "") {
        errselect(dep);
        f = 1;
    } else {
        succselect(dep)
    }
    if (f) {
        return false
    }
    return true
}

b1.onclick = function () {
    let item = JSON.parse(localStorage.getItem(username.value))
    item[3] = dep.value;
    localStorage.setItem(username.value, JSON.stringify(item));
    if (Valid()) {
        alert("Assign Completed")
    }
};
