document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = "Thank you for registering!";
    confirmationMessage.style.display = 'none';
    confirmationMessage.style.color = '#6a5acd';
    confirmationMessage.style.textAlign = 'center';
    form.appendChild(confirmationMessage);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collecting form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display the confirmation message
        confirmationMessage.style.display = 'block';

        // Clear the form fields
        form.reset();

        // Hide the confirmation message after a few seconds
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);

        console.log("Form submitted successfully:", data);
    });
});
