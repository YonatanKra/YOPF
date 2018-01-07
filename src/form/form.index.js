// get the template
var template = require('./form.index.html');
// get the styles
require('./form.index.css');

class YOPFForm{
    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
        this._form = this._element.getElementsByTagName('form')[0];
        this._form.addEventListener("submit", (event)=> {
            event.preventDefault();
            this.onSubmit(event.target);
        },
            false
        );
    }

    onSubmit(form) {
        this._callback(form.phrase.value);
    }

    listen(callback) {
        this._callback = callback;
    }
}

module.exports = YOPFForm;