// Function to update the greeting based on the time of day
function updateGreeting() {
    const greetingText = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();

    let greeting;
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingText.textContent = greeting;
}

// Event listener to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
});
