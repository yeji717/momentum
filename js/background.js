const images = ["0.jpeg","1.jpeg","2.jpeg"];

const body = document.body;

const chosenImage = images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage = `url(./img/${chosenImage})`;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);