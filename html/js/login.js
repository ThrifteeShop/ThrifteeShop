document.getElementById('show-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        this.textContent = 'Show Password';
    }
});
