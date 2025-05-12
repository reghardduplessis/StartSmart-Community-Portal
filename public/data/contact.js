document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  form.addEventListener('submit', function (e) {
    let isValid = true;

    // Clear previous errors
    [name, email, message].forEach(input => input.classList.remove('error'));
    [nameError, emailError, messageError].forEach(el => el.textContent = '');

    if (name.value.trim().length <= 2) {
      nameError.textContent = 'Name must be at least 2 characters.';
      name.classList.add('error');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      email.classList.add('error');
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = 'Message must be at least 10 characters.';
      message.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});