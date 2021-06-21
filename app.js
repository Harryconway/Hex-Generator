let hexValue = document.getElementById('hexvalue');
let generateColor = document.getElementById('generatecolor');

const hexColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = `#${randomColor}`;
    hexValue.innerHTML = `#${randomColor}`;
}

generateColor.addEventListener('click', hexColor);
