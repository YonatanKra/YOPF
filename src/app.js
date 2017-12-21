const template = import('./index.html');
const styles = import ('./app.css');

import YOPFForm from './form/form.index';
import YOPFFireworks from './fireworks/fireworks.index';

(async function() {
    function onPhraseChange(phrase) {
        fireworks.doFireworks(phrase);
    }

    document.body.innerHTML = await template;
    const form = new YOPFForm(document.getElementById('phrase-form-wrapper'));
    const fireworks = new YOPFFireworks(document.getElementById('phrase-fireworks-wrapper'));
    form.listen(onPhraseChange);
})();
