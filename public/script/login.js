const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    var emailId = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    try {
        if(!localStorage.getItem("userType"))
            if(confirm("Session Expired Want to Signup Again??"))
            {
                window.location.replace("../../public/signup.html");
                return;
            }
            else
            {
                window.location.reload();
            }
            if(localStorage.getItem("email")===emailId)
            {
                if(localStorage.getItem("password")===pass)
                {
                    if(localStorage.getItem("userType")==="needy")
                        window.location.replace("../../public/needy.html");
                    else
                        window.location.replace("../../public/donor.html");
                }
                else
                alert("Wrong Password");
            }
            else
            alert("Invalid Email-Id");
    } catch (error) {
        console.error('Error:', error);
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'An error occurred. Please try again later.';
    }
});