// Array of flower image URLs
const flowers = [
    "\Users\gm154\Downloads\bukeay.jpg",
    'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    'https://example.com/path/to/flower3.jpg',
    'https://example.com/path/to/flower4.jpg',
    'https://example.com/path/to/flower5.jpg'
];

// Function to get a random flower image
function getRandomFlower() {
    // Select a random indeax from the array
    const randomIndex = Math.floor(Math.random() * flowers.length);
    // Get the image element
    const flowerImage = document.getElementById('flowerImage');
    // Update the src attribute of the image element
    flowerImage.src = flowers[randomIndex];
}

// Load a random flower image on page load
window.onload = getRandomFlower;
