const { EventEmitter } = require('events');

// Create a new instance of EventEmitter
const emitter = new EventEmitter();

// Event handler for 'greeting' event
emitter.on('greeting', (name) => {
    console.log(`Hello, ${name}!`)
});

// Event handler for 'goodbye' event
emitter.on('goodbye', (name) => {
  console.log(`Goodbye ${name}!`);
});

// Event handler that emits a different event
emitter.on('send-message', (message) => {
  console.log('Sending message:', message);
  emitter.emit('message-received', message);
});

// Event handler for 'message-received' event
emitter.on('message-received', (message) => {
  console.log('Message received:', message);
});

// Emit the 'greeting' event with a parameter
emitter.emit('greeting', 'Dan');

// Emit the 'goodbye' event
emitter.emit('goodbye', 'Dan' );

// Emit the 'send-message' event with a parameter
emitter.emit('send-message', 'Hello there!');
