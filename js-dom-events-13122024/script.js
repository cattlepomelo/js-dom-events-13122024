let btn = document.getElementById("img");
let textContainer = document.getElementById("textContainer");

function overmouse() {
    const newText = document.createElement("p");
    newText.textContainer = "Click in button!!!"
    textContainer.appendChild(newText);
};

btn.addEventListener('mouseover', () => {
    const newText = document.createElement('p');
    newText.textContent = 'Click on me!';
    textContainer.appendChild(newText);
});

btn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});