document.addEventListener('DOMContentLoaded', function () {
    const creditCardForm = document.querySelector('.creditCardForm');
    const continueButton = document.getElementById('confirm');

    continueButton.addEventListener('click', function (event) {
        event.preventDefault();

        const cardholderNameInput = document.getElementById('cardholderName');
        const cardNumberInput = document.getElementById('cardNumber');
        const expiryMonthInput = document.getElementById('expiryMonth');
        const expiryYearInput = document.getElementById('expiryYear');
        const cvcInput = document.getElementById('cvc');
        const cardNumberDisplay = document.getElementById('Cardnumbers');
        const cardholderDisplay = document.querySelector('.card-id span:first-child');
        const expiryDisplay = document.querySelector('.card-id span:last-child');
        const cvcDisplay = document.querySelector('.card-back-info span');

        let isValid = true;

        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());

        // Reset border colors
        cardholderNameInput.style.border = '';
        cardNumberInput.style.border = '';
        expiryMonthInput.style.border = '';
        expiryYearInput.style.border = '';
        cvcInput.style.border = '';

        // Check conditions for each input field
        if (cardholderNameInput.value.trim() === '') {
            isValid = false;
            cardholderNameInput.style.border = '1px solid red';
            displayErrorMessage(cardholderNameInput, "Can't be blank");
        }

        if (!/^\d{16}$/.test(cardNumberInput.value.trim())) {
            isValid = false;
            cardNumberInput.style.border = '1px solid red';
            displayErrorMessage(cardNumberInput, 'Wrong format');
        }

        if (!/^\d{2}$/.test(expiryMonthInput.value.trim()) || !/^\d{2}$/.test(expiryYearInput.value.trim())) {
            isValid = false;
            expiryMonthInput.style.border = '1px solid red';
            expiryYearInput.style.border = '1px solid red';
            displayErrorMessage(expiryMonthInput, 'Wrong format');
        }

        if (!/^\d{3}$/.test(cvcInput.value.trim())) {
            isValid = false;
            cvcInput.style.border = '1px solid red';
            displayErrorMessage(cvcInput, 'Wrong format');
        }

        if (isValid) {
            // If all conditions are met, submit the form or perform further actions
            creditCardForm.style.display = 'none';
            const confirmedBox = document.querySelector('.confirmed-box');
            confirmedBox.style.display = 'flex';
            // Here you can perform any further actions, like displaying a success message

            // Update card information
            cardNumberDisplay.textContent = cardNumberInput.value.trim();
            cardholderDisplay.textContent = cardholderNameInput.value.trim();
            expiryDisplay.textContent = `${expiryMonthInput.value.trim()}/${expiryYearInput.value.trim()}`;
            cvcDisplay.textContent = cvcInput.value.trim();

        }
    });

    // Function to display error message under the input field
    function displayErrorMessage(inputField, messageText) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = messageText;
        errorMessage.style.color = 'red';
        inputField.parentNode.appendChild(errorMessage);
    }
});



  document.addEventListener('DOMContentLoaded', function () {
    const cardNumberDisplay = document.getElementById('Cardnumbers');
    const cardholderDisplay = document.querySelector('.card-id span:first-child');
    const expiryDisplay = document.querySelector('.card-id span:last-child');
    const cvcDisplay = document.querySelector('.card-back-info span');

    const creditCardForm = document.querySelector('.creditCardForm');
    const continueButton = document.getElementById('continue');
    continueButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Reset card display
        cardNumberDisplay.textContent = '0000 0000 0000 0000';
        cardholderDisplay.textContent = 'Jane Appleseed';
        expiryDisplay.textContent = '00/00';
        cvcDisplay.textContent = '000';

        // Reset input fields
        const cardholderNameInput = document.getElementById('cardholderName');
        const cardNumberInput = document.getElementById('cardNumber');
        const expiryMonthInput = document.getElementById('expiryMonth');
        const expiryYearInput = document.getElementById('expiryYear');
        const cvcInput = document.getElementById('cvc');

        cardholderNameInput.value = '';
        cardNumberInput.value = '';
        expiryMonthInput.value = '';
        expiryYearInput.value = '';
        cvcInput.value = '';

        // Display credit card form and hide confirmation box
        creditCardForm.style.display = 'flex';
        const confirmedBox = document.querySelector('.confirmed-box');
        confirmedBox.style.display = 'none';
    });
});
