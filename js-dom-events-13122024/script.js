let btn = document.getElementById("img");
let textContainer = document.getElementById("textContainer");

btn.addEventListener('mouseover', () => {
    const newText = document.createElement('p');
    newText.textContent = 'Click on me!';
    textContainer.appendChild(newText);
});

btn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});