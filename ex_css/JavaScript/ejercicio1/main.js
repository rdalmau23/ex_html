let array = [];
const emoticonos = ["🌶️", "💈", "🎴", "🍋", "🍄", "🃏", "🍕", "🥊", "🏆", "🎃", "🍓", "🏍️", "🛵", "🛹", "🍺", "✂️"];

function updateDisplay() {
    document.getElementById("mostrarArray").innerHTML = JSON.stringify(array);
}

function randomEmoji() {
    const random = Math.floor(Math.random() * emoticonos.length);
    return emoticonos[random];
}

function push() {
    array.push(randomEmoji());
    updateDisplay();
}

function unshift() {
    array.unshift(randomEmoji());
    updateDisplay();
}

function insert() {
    const index = parseInt(document.getElementById("insert").value);
        array.splice(index, 0, randomEmoji());
        updateDisplay();
}

function pop() {
        array.pop();
        updateDisplay();
}

function shift() {
        array.shift();
        updateDisplay();
    
}

function remove() {
    const index = parseInt(document.getElementById("remove").value);
        array.splice(index, 1);
        updateDisplay();
}

updateDisplay();
