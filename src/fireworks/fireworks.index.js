const fireworks = require('fireworks');
// get the styles
import {} from './fireworks.css';

class YOPFFireworks{
    constructor(element) {
        this._element = element;
    }

    get centerX() {
        return this._centerX ? this._centerX : this._centerX = this._element.offsetLeft + this._element.offsetWidth / 2;
    }

    get centerY() {
        return this._centerY ? this._centerY : this._centerY = this._element.offsetTop + this._element.offsetHeight / 2;
    }

    doFireworks(phrase) {
        this._element.innerHTML = '<h1 class="phraseText">' + phrase + '</h1>';

        if (this._interval) {
            return;
        }

        this._interval = setInterval(() => {
            const newX = Math.random()*100*(Math.random() < .5 ? -1 : 1);
            const newY = Math.random()*100*(Math.random() < .5 ? -1 : 1);
            fireworks({
                x: this.centerX + newX,
                y: this.centerY + newY,
                colors: ["#cc3333", "#4CAF50", "#81C784"]
            });
        }, 500);
    }

    stopFireworks() {
        if (!this._interval) {
            return;
        }
        clearInterval(this._interval);
        this._interval = null;
    }
}
export default YOPFFireworks;