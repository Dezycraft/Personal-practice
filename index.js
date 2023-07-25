// Get element from DOM
const greetingElement = document.getElementById('greeting');
const changeColorBtn = document.getElementById('changeColorBtn')

// Lets add an event listener to the button
changeColorBtn.addEventListener('click', () => {
    //we would generate a random color
    const randomColor = getRandomColor();
    // lets change the background color
    document.body.style.backgroundColor = randomColor;
});

// function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}