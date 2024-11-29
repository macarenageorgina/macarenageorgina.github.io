// Seleccionar los elementos del formulario
const form = document.querySelector('.contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nombre-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('consulta-error');

// Función para validar el nombre
function validateName() {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Permite letras con acentos y espacios

    if (!nameValue) {
        nameError.textContent = 'El nombre es obligatorio.';
        return false;
    } else if (!nameRegex.test(nameValue)) {
        nameError.textContent = 'El nombre solo puede contener letras y espacios.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

// Función para validar el email
function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        return false;
    } else if (!emailInput.checkValidity()) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

// Función para validar el mensaje
function validateMessage() {
    const messageValue = messageInput.value.trim();

    if (!messageValue) {
        messageError.textContent = 'El mensaje es obligatorio.';
        return false;
    } else if (messageValue.length < 10) {
        messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío por defecto del formulario

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        alert('Formulario enviado con éxito.');
        form.reset(); // Limpia el formulario
    }
});

// Validaciones en tiempo real
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);