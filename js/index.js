const btnEnter = document.querySelector('.reg-btn_enter');
const formEnter = document.querySelector('.reg-enter-form');
const btnReg = document.querySelector('.btn-register');
const formReg = document.querySelector('.reg-register-form');


btnEnter.addEventListener('click', function () {
    formEnter.classList.toggle('active');
    formReg.classList.remove('active')

})
btnReg.addEventListener('click', function () {
    formEnter.classList.remove('active');
    formReg.classList.add('active');
})
document.addEventListener('click', function(event) {
    if(!formEnter) {
        formEnter.remove('active')
    }
})

