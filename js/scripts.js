// Validation of form fields on contact.html
let form = document.querySelector('#contact-form');
let emailInput = document.querySelector('#contact-email');

// Function to display the error message
function showErrorMessage(input, message) {
    let container = input.parentElement;

    // Remove any existing error message first
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }

    // Display the error message and append it to the container (the div wrapping the input field)
    if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}

// Function to validate the email address, and if invalid call the showErrorMessage function
function validateEmail() {
    let value = emailInput.value;

    // If there is no value in the input field, display an error message
    if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
    }

    // If there is no @ symbol in the input field, display a different error message
    if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'Please enter a valid email address.');
        return false;
    }

    // If the above validations are passed, call showErrorMessage with no message input to clear any existing errors and return true
    showErrorMessage(emailInput, null);
    return true;
}

// Add event listener for inputs into the emailInput field, and call validateEmail
emailInput.addEventListener('input', validateEmail);

// Email JS integration - https://www.emailjs.com/docs/tutorial/creating-contact-form/
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_V7Q1ny4u6BehHxl4WQtIz');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0lbikba', 'template_2zxgal8', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Error...', error);
            });
    });
}
