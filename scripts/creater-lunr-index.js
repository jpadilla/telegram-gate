const lunr = require('lunr');
const telegramGate = require('../static/chat.json');
const elOtro = require('../static/chat-otro.json');
const fs = require('fs');
const path = require('path');

const staticPath = path.join(path.dirname(__dirname), 'static');

const telegramGateIndex = lunr(function() {
    this.ref('page');
    this.field('text');

    telegramGate.forEach(message => this.add(message), this);
});

const elOtroIndex = lunr(function() {
    this.ref = 'page';
    this.field = 'text';

    elOtro.forEach(message => this.add(message), this);
});

fs.writeFile(path.join(staticPath, 'telegram-gate-index.json'), JSON.stringify(telegramGateIndex), error => {
    if(error) {
        console.error('ERROR writing telegramGateIndex index to file.', error);
    }
});

fs.writeFile(path.join(staticPath, 'el-otro-index.json'), JSON.stringify(elOtroIndex), error => {
    if(error) {
        console.error('ERROR writing elOtro index to file.', error);
    }
});