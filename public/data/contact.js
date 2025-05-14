// This eventlistener waits for all content on the ejs pge to load. Once that happens, validation for the form begins
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
// All the above consts retrieve elements to be validated

// This is the input text validation for name and email. Essentially, what is and isn't allowed input, along with requirements such as @
  const namePattern = /^[A-Za-z\s'-]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate name field
  function validateName() {
    const nameValue = name.value.trim(); //removes white space
    if (nameValue.length < 2) { // if the name input is less than two
      nameError.textContent = 'Name must be at least 2 characters.';
      name.classList.add('is-invalid');
      name.classList.remove('is-valid'); //adds or removes classes with css styling depending on validity
    } else if (!namePattern.test(nameValue)) {
      nameError.textContent = 'Name can only contain letters, spaces, hyphens, and apostrophes.';
      name.classList.add('is-invalid');
      name.classList.remove('is-valid');
    } else {
      name.classList.add('is-valid');
      name.classList.remove('is-invalid');
      nameError.textContent = ''; // Clear error message if valid
    }
  }

  // Function to validate email field
  function validateEmail() {
    const emailValue = email.value.trim();
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
    } else {
      email.classList.add('is-valid');
      email.classList.remove('is-invalid');
      emailError.textContent = ''; // Clear error message if valid
    }
  }

  // Function to validate message field
  function validateMessage() {
    const messageValue = message.value.trim();
    if (messageValue.length < 10) {
      messageError.textContent = 'Message must be at least 10 characters.';
      message.classList.add('is-invalid');
      message.classList.remove('is-valid');
    } else {
      message.classList.add('is-valid');
      message.classList.remove('is-invalid');
      messageError.textContent = ''; // Clear error message if valid
    }
  }

  // Add event listeners for real-time validation. This allowes constant validation and removes reliance on
  // submit button for validation. This further reduces user frustration
  name.addEventListener('input', validateName);
  email.addEventListener('input', validateEmail);
  message.addEventListener('input', validateMessage);

  form.addEventListener('submit', function (e) {
    let isValid = true; //only allows submision if all values is valid

    // Perform final validation when submitting
    [name, email, message].forEach(input => {
      input.classList.remove('is-invalid', 'is-valid'); // Clear both invalid and valid classes
    });
    [nameError, emailError, messageError].forEach(error => error.textContent = '');

    validateName(); // Check name once again
    validateEmail(); // Check email once again
    validateMessage(); // Check message once again

    // If any field is invalid, prevent form submission
    [name, email, message].forEach(input => {
      if (input.classList.contains('is-invalid')) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});
