const btnEnter = document.querySelector('.reg-btn_enter');
const btnOut = document.querySelector('.button-out');
const formEnter = document.querySelector('.reg-enter-form');
const btnReg = document.querySelector('.btn-register');
const formReg = document.querySelector('.reg-register-form');
const regBg = document.querySelector('.reg');
const parentFormEnter = document.querySelector('.reg-enter');
const parentFormRegister = document.querySelector('.reg-register');
const closeModal = document.querySelector('.bg-opacity')


btnEnter.addEventListener('click', function () {
    regBg.classList.toggle('active');
    formEnter.classList.add('active');
    formReg.classList.remove('active');
    parentFormRegister.classList.remove('center');
    parentFormEnter.classList.add('center');
})
btnReg.addEventListener('click', function () {
    formEnter.classList.remove('active');
    formReg.classList.add('active');
    parentFormEnter.classList.remove('center');
    parentFormRegister.classList.add('center');
})
closeModal.addEventListener('click', function () {
    formEnter.classList.remove('active');
    formReg.classList.remove('active');
    regBg.classList.remove('active');
})

// validation
// validation enter


const link = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');
const content = document.querySelector('.content');
const userEmail = document.querySelector('.userEmail');
const userPswrd = document.querySelector('.userPswrd');
const sendFormBtn = document.querySelector('.send-form');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PASSORD_REGEXP = /^(?=.*[A-Z].)(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;


formEnter.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!EMAIL_REGEXP.test(userEmail.value)) {
        event.preventDefault();
        userEmail.style.borderColor = 'red';
    }
    if (!PASSORD_REGEXP.test(userPswrd.value)) {
        event.preventDefault();
        userPswrd.style.borderColor = 'red';
    }

    //организован вход в аккаунт и появление сайта авторизованному пользователю
    for (let i in users) {
        for (let key in users[i]) {
            if(users[i][key] == userEmail.value) {
                console.log(users[i][key]);
                for (let value in users[i]) {
                    if(users[i][value] == userPswrd.value) {
                        console.log(users[i][value]);
                        nav.classList.add('active');
                        regBg.classList.remove('active');
                        btnEnter.style.display = 'none';
                        btnOut.classList.add('active');
                        link[0].classList.add('nav-link__active');
                        content.style.display = 'block';
                        content.append(navigator.userAgent)
                        break;
                    }
                }
            }
        }
    }
    btnOut.addEventListener('click', function() {
        nav.classList.remove('active');
        btnOut.classList.remove('active');
        btnEnter.style.display = 'block';
        link[0].classList.remove('nav-link__active');
    })
})

function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
}
function validatePassword(value) {
    return PASSORD_REGEXP.test(value)
}
function updateInput() {
    if (validateEmail(userEmail.value)) {
        userEmail.style.borderColor = 'green';
    } else {
        userEmail.style.borderColor = 'red';
    }
}
function updatePassword() {
    if (validatePassword(userPswrd.value)) {
        userPswrd.style.borderColor = 'green';
    } else {
        userPswrd.style.borderColor = 'red';
    }
}
userEmail.addEventListener('input', updateInput);
userPswrd.addEventListener('input', updatePassword);




// validation registration

const PHONE_REGEXP = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
const USER_REGEXP = /^[A-Za-z0-9_-]{2,16}$/;

const userName = document.querySelector('.userName');
const pswrdReg = document.querySelector('.pswrd-reg');
const pswrdRedDB = document.querySelector('.pswrd-reg-db');
const userCompany = document.querySelector('.user-Company');
const userEmailReg = document.querySelector('.user-email');
const userPhone = document.querySelector('.user-phone');
const userBalance = document.querySelector('.user-balance');
const btnRegister = document.querySelector('.reg-form-btn')

const newUser = document.querySelectorAll('form.reg-register-form input');

//получаем ключи из local storage и добавляем в массив обекты полльзователей 
let keyLocalStorage = Object.keys(localStorage);
let users = [];

//получаем пользователей из LocalStorage и добавляем их в массив
for (let i = 0; i < keyLocalStorage.length; i++){
    users.push(JSON.parse(localStorage.getItem(keyLocalStorage[i])));
}

formReg.addEventListener('submit', function (event) {
    if (!USER_REGEXP.test(userName.value)) {
        event.preventDefault();
        userName.style.borderColor = 'red';
    }
    if (!PASSORD_REGEXP.test(pswrdReg.value)) {
        event.preventDefault();
        pswrdReg.style.borderColor = 'red';
    }
    if (pswrdReg.value !== pswrdRedDB.value) {
        event.preventDefault();
        pswrdRedDB.style.borderColor = 'red';
        pswrdReg.style.borderColor = 'transparent';
    }
    if (!EMAIL_REGEXP.test(userEmailReg.value)) {
        event.preventDefault();
        userEmailReg.style.borderColor = 'red';
    }
    if (!PHONE_REGEXP.test(userPhone.value)) {
        event.preventDefault();
        userPhone.style.borderColor = 'red';
    }
    if (userCompany.value == '') {
        event.preventDefault();
        userCompany.style.borderColor = 'red';
    }
    if (userBalance.value == '') {
        event.preventDefault();
        userBalance.style.borderColor = 'red';
    }

    //создаем пользователя
    let us = {
        name: newUser[0].value,
        password: newUser[1].value,
        company: newUser[3].value,
        email: newUser[4].value,
        phone: newUser[5].value,
        balance: newUser[6].value,
        date: new Date(),
    }

    //добавляем пол пользователя
    for (let i = 6; i < newUser.length; i++) {
        if (newUser[i].checked == true) {
            us.gender = newUser[i].value
        }
    }

    //отправляем пользователя в localStorage
    localStorage.setItem(us.name, JSON.stringify(us));

})

function updateRegName() {
    if (USER_REGEXP.test(userName.value)) {
        userName.style.borderColor = 'green';
    } else {
        userName.style.borderColor = 'red';
    }
}
function updateRegPswrd() {
    if (PASSORD_REGEXP.test(pswrdReg.value)) {
        pswrdReg.style.borderColor = 'green';
    } else {
        pswrdReg.style.borderColor = 'red';
    }
}
function samePassword() {
    if (pswrdReg.value === pswrdRedDB.value) {
        pswrdRedDB.style.borderColor = 'green';
    } else {
        pswrdRedDB.style.borderColor = 'red';
    }
}
function updateRegEmail() {
    if (EMAIL_REGEXP.test(userEmailReg.value)) {
        userEmailReg.style.borderColor = 'green';
    } else {
        userEmailReg.style.borderColor = 'red';
    }
}
function updateRegPhone() {
    if (PHONE_REGEXP.test(userPhone.value)) {
        userPhone.style.borderColor = 'green';
    } else {
        userPhone.style.borderColor = 'red';
    }
}
userName.addEventListener('input', updateRegName);
pswrdReg.addEventListener('input', updateRegPswrd);
userEmailReg.addEventListener('input', updateRegEmail);
userPhone.addEventListener('input', updateRegPhone);
pswrdRedDB.addEventListener('input', samePassword);