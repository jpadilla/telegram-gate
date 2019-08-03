import lunr from 'lunr';
import stemmerSupport from 'lunr-languages/lunr.stemmer.support.js';
import multi from 'lunr-languages/lunr.multi';
import es from 'lunr-languages/lunr.es';

function setUpLunr() {
    stemmerSupport(lunr);
    multi(lunr);
    es(lunr);
    lunr.multiLanguage('en', 'es');

    return lunr
}

export default setUpLunr();