
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
})

emitter.emit("messageLogged", { id:1, url: 'http://'}); //the {} is event argument

// Raise: logging (data: message)

emitter.on('Exercise logged', function(arg){
    console.log('Exercise received', arg);
})

emitter.emit('Exercise logged', {id: 2, url: 'Has done the question stated'});