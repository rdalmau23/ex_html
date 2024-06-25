"use strict";
class LightBulbController {
    constructor(switchElement, bulbElement) {
        this.switchElement = switchElement;
        this.bulbElement = bulbElement;
        this.isOn = false;
        this.updateImages();
        this.switchElement.addEventListener('click', () => this.toggle());
    }
    toggle() {
        this.isOn = !this.isOn;
        this.updateImages();
    }
    updateImages() {
        if (this.isOn) {
            this.switchElement.src = 'img/bon.jpg';
            this.bulbElement.src = 'img/on.jpg';
        }
        else {
            this.switchElement.src = 'img/boff.jpg';
            this.bulbElement.src = 'img/off.jpg';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('switch');
    const bulbElement = document.getElementById('bulb');
    new LightBulbController(switchElement, bulbElement);
});
