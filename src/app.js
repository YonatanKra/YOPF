import * as template from './index.html';
import {} from './app.css';

import YOPFForm from './form/form.index';
import YOPFFireworks from './fireworks/fireworks.index';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

(async function() {
    function onPhraseChange(phrase) {
        fireworks.doFireworks(phrase);
    }

    document.body.innerHTML = await template;
    const form = new YOPFForm(document.getElementById('phrase-form-wrapper'));
    const fireworks = new YOPFFireworks(document.getElementById('phrase-fireworks-wrapper'));
    form.listen(onPhraseChange);
})();
