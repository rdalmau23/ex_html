let array = [];
const emoticons = ["🌶️", "💈", "🎴", "🍋", "🍄", "🃏", "🍕", "🥊", "🏆", "🎃", "🍓", "🏍️", "🛵", "🛹", "🍺", "✂️"];

function updateDisplay() {
    document.getElementById("arrayDisplay").innerText = JSON.stringify(array);
}

function randomEmoji() {
    const randomIndex = Math.floor(Math.random() * emoticons.length);
    return emoticons[randomIndex];
}

function pushItem() {
    array.push(randomEmoji());
    updateDisplay();
}

function unshiftItem() {
    array.unshift(randomEmoji());
    updateDisplay();
}

function insertItem() {
    const index = parseInt(document.getElementById("insertIndex").value);
        array.splice(index, 0, randomEmoji());
        updateDisplay();
}

function popItem() {
    if (array.length > 0) {
        array.pop();
        updateDisplay();
    } 
}

function shiftItem() {
    if (array.length > 0) {
        array.shift();
        updateDisplay();
    } 
}

function removeItem() {
    const index = parseInt(document.getElementById("removeIndex").value);
        array.splice(index, 1);
        updateDisplay();
}

updateDisplay();
