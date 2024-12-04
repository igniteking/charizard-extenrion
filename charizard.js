// Create an image element
const image = new Image();
image.src = ("https://github.com/igniteking/charizard-extenrion/blob/main/pokemon.gif?raw=true"); // Ensure the image file name and path are correct
image.id = "charizard-bottom-left-image";
image.alt = "Bottom Left Image";

// Log the image source URL to debug
console.log("Image source URL:", image.src);

// Error handling for image loading
image.onerror = function () {
  console.error("Failed to load image:", image.src);
};

// Append the image to the body
document.body.appendChild(image);

// Verify the image after appending
console.log("Image element:", document.getElementById("charizard-bottom-left-image"));
