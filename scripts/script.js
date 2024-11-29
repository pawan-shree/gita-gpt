// JavaScript for Loading and Fade-In Effect
window.addEventListener('load', function () {
    const loadingContainer = document.getElementById('loading-container');

    setTimeout(() => {
        loadingContainer.style.display = 'none'; // Hide the loading animation
        document.body.classList.remove('loading'); // Remove loading class

        // Fade-in effect by adding a new class to the body
        document.body.style.animation = "fadeIn 1s ease forwards";
    }, 3000); // Match this duration to the animation time in CSS
});

const getStarted = document.getElementById("get-started");
const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");

getStarted.addEventListener('click', () => {
    location.href = 'emotions.html';
});

logo.addEventListener('click', () => {
    location.href = 'index.html';
});

about.addEventListener('click', () => {
    location.href = 'about.html';
});

contact.addEventListener('click', () => {
    location.href = 'contact.html';
});

devs.addEventListener('click', () => {
    location.href = 'devs.html';
});

// Cursor Trail 
const trails = document.querySelectorAll(".trail");

// Store the positions for each image in the trail
let positions = Array.from({ length: trails.length }).map(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
}));

// Update the cursor position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let isMoving = false; // Track if the mouse is moving
let fadeOutTimeout; // Store timeout for fading out

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    isMoving = true; // Set moving flag

    // Clear the fade-out timeout and reset the opacity of trails
    if (fadeOutTimeout) {
        clearTimeout(fadeOutTimeout);
    }

    trails.forEach((trail) => {
        trail.style.opacity = 1; // Reset opacity to fully visible
    });

    // Set a timeout to fade out the images after a short delay
    fadeOutTimeout = setTimeout(() => {
        isMoving = false; // Set moving flag to false after the delay
        fadeOutImages();
    }, 500); // Change this duration to adjust the delay before fading out
});

// Function to fade out images
function fadeOutImages() {
    trails.forEach((trail) => {
        trail.style.opacity = 0; // Fade out images
    });
}

// Animate the trail with a smooth "train" effect
function animateTrail() {
    // First image follows the cursor closely
    positions[0].x = mouseX - 750; // Set the first position directly to the mouse position
    positions[0].y = mouseY; // Set the first position directly to the mouse position

    // Each subsequent image follows the one before it
    for (let i = 1; i < trails.length; i++) {
        // Interpolate between current and previous position for a smooth effect
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.15; // Tweak the multiplier for smoothness
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.15; // Tweak the multiplier for smoothness
    }

    // Apply positions to the images
    trails.forEach((trail, index) => {
        // Center the images around the cursor by offsetting half of their dimensions
        trail.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`; // No offset, images stick to cursor
    });

    // If the cursor is not moving, fade out images
    if (!isMoving) {
        fadeOutImages();
    }

    // Request the next animation frame
    requestAnimationFrame(animateTrail);
}

// Start the animation on page load
window.onload = () => {
    animateTrail();
};


//Vercel Analytics
(function (w, d, u) {
    w.vercelAnalytics = function () {
        var t = d.createElement("script");
        t.src = "https://analytics.vercel-insights.com/script.js";
        t.defer = true;
        d.head.appendChild(t);
    };
    w.vercelAnalytics();
})(window, document);

