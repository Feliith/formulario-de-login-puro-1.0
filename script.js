
const emailInput = document.querySelector('input[type="text"]')
const passInput = document.querySelector('input[type="password"]')

const pDisable = document.querySelectorAll('.login-form p')

emailInput.addEventListener('input', validateEmail)
passInput.addEventListener('input', validatePassword)

function validateEmail(event) {
    const input = event.currentTarget
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const emailTest = regex.test(input.value)

    if (emailTest) {
        emailInput.style.borderColor = '#9be979'
        pDisable[0].classList.remove('show')
    } else {
        emailInput.style.borderColor = '#ff5b5b'
        pDisable[0].classList.add('show')
    }
}

function validatePassword(event) {
    const input = event.currentTarget
    
    if (input.value.length < 6) {
        passInput.style.borderColor = '#ff5b5b'
        pDisable[1].classList.add('show')
    } else {
        passInput.style.borderColor = '#9be979'
        pDisable[1].classList.remove('show')
    }
}