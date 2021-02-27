const btnEnter = document.querySelector('.reg-btn_enter');
const formEnter = document.querySelector('.reg-enter-form');
const btnReg = document.querySelector('.btn-register');
const formReg = document.querySelector('.reg-register-form');
const regBg = document.querySelector('.reg');
const parentFormEnter = document.querySelector('.reg-enter');
const parentFormRegister = document.querySelector('.reg-register');
const closeModal = document.querySelector('.bg-opacity')


btnEnter.addEventListener('click', function () {
    regBg.classList.toggle('active');
    formEnter.classList.toggle('active');
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
closeModal.addEventListener('click', function() {
    formEnter.classList.remove('active');
    formReg.classList.remove('active');
    regBg.classList.remove('active');


})

