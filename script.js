// Add any JavaScript functionality here
console.log('JavaScript file loaded');

// Example: Add an event listener to the contact form
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Do something with the form data (e.g., send it to a server)
    console.log('Form submitted:', { name, email, message });

    // Reset the form
    form.reset();
});