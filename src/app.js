var template = require('./index.html');
require('./app.css');

var YOPFForm = require('./form/form.index');

require('jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

(function() {
    let fireworks;
    function onPhraseChange(phrase) {
        return new Promise((resolve) => {
            if (!fireworks) {
                require.ensure([], function(require) {
                    YOPFFireworks = require('./fireworks/fireworks.index');
                    fireworks = new YOPFFireworks(document.getElementById('phrase-fireworks-wrapper'));
                    resolve(fireworks.doFireworks(phrase));
                });
                return;
            }
            resolve(fireworks.doFireworks(phrase));
        });
    }

    document.body.innerHTML = template;
    const form = new YOPFForm(document.getElementById('phrase-form-wrapper'));
    form.listen(onPhraseChange);
})();
