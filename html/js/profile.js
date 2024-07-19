
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.profile-form');
    const nameInput = document.getElementById('name');
    const profileName = document.querySelector('.profile-name');

    // Load data from local storage and populate the form
    const loadProfileData = () => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        if (profileData) {
            nameInput.value = profileData.name || '';
            document.getElementById('birthdate').value = profileData.birthdate || '';
            document.getElementById('phone').value = profileData.phone || '';
            document.getElementById('address').value = profileData.address || '';
            document.getElementById('email').value = profileData.email || '';
            profileName.textContent = profileData.name || 'Your Name';
        }
    };

    // Save data to local storage when form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const profileData = {
            name: nameInput.value,
            birthdate: document.getElementById('birthdate').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value
        };
        localStorage.setItem('profileData', JSON.stringify(profileData));
        profileName.textContent = nameInput.value || 'Your Name';
        alert('Profile data saved successfully!');
    });

    // Load the profile data when the page loads
    loadProfileData();
});

