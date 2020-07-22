
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger;

logger.on('messageLogged', function(arg){
    //after logger registering message, execute code below
    console.log('Listener called', arg);
});

logger.log('message');

