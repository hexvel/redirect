const button = document.querySelector('.btn');
const btnLogin = document.querySelector('.btn-login');
const btnSignIn = document.querySelector('.signin');
const InputLogin = document.querySelector('.logIn');
const InputPass = document.querySelector('.passIn');
const form = document.querySelector('.form');
const login = document.querySelector('.main_login');
const password = document.querySelector('.password');
const email = document.querySelector('.email');

const isRegistration = localStorage.getItem('isRegistration');
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href === 'http://127.0.0.1:5500/location_replace/main.html') {
        if (isRegistration !== 'true')
            window.location.href = 'http://127.0.0.1:5500/location_replace/index.html'
    } else if (window.location.href === 'http://127.0.0.1:5500/location_replace/index.html') {
        if (isRegistration === 'true')
            window.location.href = 'http://127.0.0.1:5500/location_replace/main.html'
    }
})

if (window.location.href === 'http://127.0.0.1:5500/location_replace/index.html') {
    function validate_reg() {
        localStorage.setItem('login', login.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('isRegistration', 'true');
        window.location.href = 'http://127.0.0.1:5500/location_replace/main.html'
    }

    button.addEventListener('click', function() {
        validate_reg()
       form.classList.add('form--no')
    });

    btnLogin.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/location_replace/auth.html'
    })
}

if (window.location.href === 'http://127.0.0.1:5500/location_replace/auth.html') {
    function validate_auth() {
        if (!InputLogin.value) alert("Введите логин");
        else if (!InputPass.value) alert("Введите пароль");
        else {
            const passwordIn = InputPass.value
            const loginIn = InputLogin.value
            if (!passwordIn) alert("Введите пароль");
            if (!loginIn) alert("Введите логин");
            else {
                if (!localStorage.getItem('login')) {
                    window.location.href = 'http://127.0.0.1:5500/location_replace/index.html'
                } else {
                    if (loginIn === localStorage.getItem('login')) {
                        if (passwordIn === localStorage.getItem('password')) {
                            window.location.href = 'http://127.0.0.1:5500/location_replace/main.html'
                        } else {
                            alert("Неверный пароль")
                        }
                    } else {
                        alert("Неверный логин")
                    }
                }
            }
        }
    }

    btnSignIn.addEventListener('click', () => {
        validate_auth()
    })
}