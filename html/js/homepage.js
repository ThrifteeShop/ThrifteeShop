document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let index = 0;

    function showMessage() {
        messages.forEach((message, i) => {
            if (i === index) {
                message.style.opacity = '1';
                message.style.zIndex = '1';
            } else {
                message.style.opacity = '0';
                message.style.zIndex = '0';
            }
        });
        index = (index + 1) % messages.length;
    }

    // Ensure all messages are hidden and the first one is visible initially
    messages.forEach((message, i) => {
        message.style.opacity = i === index ? '1' : '0';
        message.style.zIndex = i === index ? '1' : '0';
    });

    // Show the first message at the start
    showMessage();

    // Change message every 7 seconds
    setInterval(showMessage, 7000);
});
