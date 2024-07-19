// Select all product boxes
const productBoxes = document.querySelectorAll('.product-box');

// Select modal and modal content elements
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModalButton = document.querySelector('.close');

// Function to open modal and populate with product details
function openModal(title, description, price, imgSrc) {
    // Populate modal content with product details
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${imgSrc}" alt="" class="modal-img" />
        <h2 class="modal-title">${title}</h2>
        <p class="modal-description">${description}</p>
        <span class="modal-price">${price}</span>
    `;
    // Display the modal
    modal.style.display = 'block';

    // Add event listener to close button
    const closeButton = modalContent.querySelector('.close');
    closeButton.addEventListener('click', () => {
        closeModalFunction();
    });
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = 'none';
}

// Event listeners for product boxes
productBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Retrieve data attributes for the clicked product box
        const title = box.getAttribute('data-title');
        const description = box.getAttribute('data-description');
        const price = box.getAttribute('data-price');
        const imgSrc = box.querySelector('.product-img').getAttribute('src');
        
        // Open the modal with the retrieved product details
        openModal(title, description, price, imgSrc);
    });

    // Prevent modal from opening when clicking on the add to cart icon
    const addToCartIcon = box.querySelector('.add-cart');
    addToCartIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to the product box
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});
    