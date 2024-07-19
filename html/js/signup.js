
    document.addEventListener('DOMContentLoaded', function() {
        // Function to toggle visibility for the first password input
        var showPasswordLabel1 = document.getElementById('show-password-1');
        var passwordInput1 = document.getElementById('password');

        showPasswordLabel1.addEventListener('click', function() {
            if (passwordInput1.type === 'password') {
                passwordInput1.type = 'text';
                this.textContent = 'Hide Password';
            } else {
                passwordInput1.type = 'password';
                this.textContent = 'Show Password';
            }
        });

        // Function to toggle visibility for the second password input
        var showPasswordLabel2 = document.getElementById('show-password-2');
        var passwordInput2 = document.getElementById('confirm-password');

        showPasswordLabel2.addEventListener('click', function() {
            if (passwordInput2.type === 'password') {
                passwordInput2.type = 'text';
                this.textContent = 'Hide Password';
            } else {
                passwordInput2.type = 'password';
                this.textContent = 'Show Password';
            }
        });
    });

