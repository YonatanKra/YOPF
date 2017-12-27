import * as template from './index.html';
import {} from './app.css';

import YOPFForm from './form/form.index';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

(async function() {
    let fireworks;
    function onPhraseChange(phrase) {
        if (!fireworks) {
            const YOPFFireworks = import ('./fireworks/fireworks.index');
            fireworks = new YOPFFireworks(document.getElementById('phrase-fireworks-wrapper'));
        }
        fireworks.doFireworks(phrase);
    }

    document.body.innerHTML = await template;
    const form = new YOPFForm(document.getElementById('phrase-form-wrapper'));
    form.listen(onPhraseChange);
})();
