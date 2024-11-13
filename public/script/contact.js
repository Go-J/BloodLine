document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let query = document.getElementById('query').value;

    if (name && email && query) {
        alert('Thank you for your query, ' + name + '! We will get back to you shortly.');
    } else {
        alert('Please fill in all fields before submitting.');
    }
});