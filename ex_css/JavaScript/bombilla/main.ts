class LightBulbController {
    private switchElement: HTMLImageElement;
    private bulbElement: HTMLImageElement;
    private isOn: boolean;

    constructor(switchElement: HTMLImageElement, bulbElement: HTMLImageElement) {
        this.switchElement = switchElement;
        this.bulbElement = bulbElement;
        this.isOn = false;
        this.updateImages();

        this.switchElement.addEventListener('click', () => this.toggle());
    }

    private toggle() {
        this.isOn = !this.isOn;
        this.updateImages();
    }

    private updateImages() {
        if (this.isOn) {
            this.switchElement.src = 'img/bon.jpg';
            this.bulbElement.src = 'img/on.jpg';
        } else {
            this.switchElement.src = 'img/boff.jpg';
            this.bulbElement.src = 'img/off.jpg';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('switch') as HTMLImageElement;
    const bulbElement = document.getElementById('bulb') as HTMLImageElement;
    new LightBulbController(switchElement, bulbElement);
});
