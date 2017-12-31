import template from './index.html';
import {} from './app.css';

import YOPFForm from './form/form.index';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

(function() {
    let fireworks;
    function onPhraseChange(phrase) {
        return new Promise((resolve) => {
            if (!fireworks) {
                import(/* webpackChunkName: "fireworks" */ './fireworks/fireworks.index').
                    then((YOPFFireworks) => {
                        fireworks = new YOPFFireworks.default(document.getElementById('phrase-fireworks-wrapper'));
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
