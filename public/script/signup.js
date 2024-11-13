const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const signupForm = document.getElementById('signupForm');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    this.classList.toggle('active'); 
});

signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    var name = document.getElementById('fullName').value; 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('userType').value;
    try {
        localStorage.setItem("userType",userType);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        if(localStorage.getItem("userType")==="needy")
            window.location.replace("../../public/needy.html");
        else if(localStorage.getItem("userType")==="donor")
            window.location.replace("../../public/donor.html");
        else{
            alert("Something Is Wrong 😒");
            return;
        }
    } catch (error) {
        if (error.response) {
            alert('Error: ' + error.response.data.message || 'An error occurred during signup.');
        } else {
            alert('Error: Unable to reach the server.');
        }
    }
});