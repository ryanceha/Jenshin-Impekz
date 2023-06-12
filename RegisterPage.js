var btnField = document.getElementsByClassName(".btn-field");
var signupBtn = document.getElementById("signupBtn");
var signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let passField = document.getElementById("passField");
let ageField = document.getElementById("ageField");
let emailField = document.getElementById("emailField");
const checkBoxId = document.getElementById("checkBoxId");
let inputgroup = document.getElementsByClassName("input-group");
let titlee = document.getElementById("titlee");
const divError1 = document.getElementById("divError1");
const divError2 = document.getElementById("divError2");
const divError3 = document.getElementById("divError3");
const divError4 = document.getElementById("divError4");
const divError5 = document.getElementById("divError5");
let logoUser = document.getElementById("logoUser");

function clicked() {
    // if (signinBtn.classList.contains("disable")) {zz
        ageField.style.maxHeight = "0px";
        emailField.style.maxHeight = "0px";
        cekboks.style.maxHeight = "0px"
        in_group.style.transitionDelay = "0.5s";
        in_group.style.maxHeight = "200px";
        // checkbox.style.maxHeight = "0"
        titlee.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
}
function clicked1() {
    // if (signinBtn.classList.contains("disable"))
        in_group.style.transitionDelay = "-1s";
        in_group.style.maxHeight = "350px";
        cekboks.style.maxHeight = "15px"
        ageField.style.maxHeight = "450px";
        emailField.style.maxHeight = "450px";
        // checkbox.style.maxHeight = "50px"
        titlee.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
}


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    var errorText = "";
    const text = document.getElementById("nameText").value;
    console.log(text.length);
    if (text != "") {
        console.log("test");
        document.getElementById("logoUser").style.color = "red"
        nameText.style.color = "red";
    } else {
        document.getElementById("logoUser").style.color = "#999"
        nameText.style.color = "#777575";
    }

    // const text1 = document.getElementById("passText").value;
    const password = document.getElementById("passText").value;
    // console.log(password);
    if (password.length < 5) {
        document.getElementById("logoPass").style.color = "red"
        passText.style.color = "red";
    } else {
        document.getElementById("logoPass").style.color = "#999"
        passText.style.color = "#777575";
    }
    // const text2 = document.getElementById("passText").value;
    const age = document.getElementById("ageText").value;
    // console.log(password);
    if (age < 13) {
        document.getElementById("logoAge").style.color = "red"
        ageText.style.color = "red";
    } else {
        document.getElementById("logoAge").style.color = "#999"
        ageText.style.color = "#777575";
    }
    const email = document.getElementById("emailText").value;
    // console.log(password);
    if (!(email.includes("@gmail.com"))) {
        document.getElementById("logoEmail").style.color = "red"
        emailText.style.color = "red";
    } else {
        document.getElementById("logoEmail").style.color = "#999"
        emailText.style.color = "#777575";
    }
    errorText = "";
    const checkBoxx = checkBoxId.checked;
    // console.log();
    if (!checkBoxx) {
        // document.getElementById("logoEmail").style.color = "red"
        cekboks.style.color = "red";
    } else {    
        // document.getElementById("logoEmail").style.color = "#999"
        cekboks.style.color = "#000";
    }
})

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
        console.log("hamburger activated");
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select =dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        console.log("dropdown activated");
        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('dragdown-active');
            });
            option.classList.add('dragdown-active');
        });
    });
})