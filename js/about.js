// Get the like button and heart icon elements
        const likeButton = document.getElementById('likeButton');
        const heartIcon = document.getElementById('heartIcon');

        // Add a click event listener to the like button
        likeButton.addEventListener('click', () => {
            // Toggle the 'liked' class on the heart icon
            heartIcon.classList.toggle('liked');
            // Toggle between solid and regular heart icons
            heartIcon.classList.toggle('fas'); // Solid heart
            heartIcon.classList.toggle('far'); // Regular (empty) heart
        });



        
document.addEventListener('DOMContentLoaded', () => {

   



    // Select the specific card that will have the follower pointer effect
    // We target the .blog-content inside the .specific-follower-card
    const targetCardForFollower = document.querySelector('.specific-follower-card .blog-content');
    const authorInfo = document.querySelector('.specific-follower-card .author-info');

    if (targetCardForFollower && authorInfo) {
        // Show the author info when mouse enters the specific card content area
        targetCardForFollower.addEventListener('mouseenter', () => {
            authorInfo.style.display = 'flex';
        });

        // Hide the author info when mouse leaves the specific card content area
        targetCardForFollower.addEventListener('mouseleave', () => {
            authorInfo.style.display = 'none';
        });

        // Make the author info follow the mouse cursor within the card
        targetCardForFollower.addEventListener('mousemove', (e) => {
            // Get the bounding rectangle of the card content area
            const cardRect = targetCardForFollower.getBoundingClientRect();

            // Calculate mouse position relative to the card content area
            const mouseX = e.clientX - cardRect.left;
            const mouseY = e.clientY - cardRect.top;

            // Update the authorInfo's position using CSS transform for smooth movement
            // Adjust -40px or other values as needed to position it correctly above the cursor
            authorInfo.style.transform = `translate(${mouseX}px, ${mouseY - 40}px) translateX(-50%)`;
            authorInfo.style.left = `0`; // Reset left property as transform will handle position
            authorInfo.style.top = `0`; // Reset top property
        });
    }
    
});

