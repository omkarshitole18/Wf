const events = require('events');

const eventEmitter = new events.EventEmitter();

const myEventHandler1 = () => {
  console.log('Event1 Detected! Callback Function Executed.');
};

const myEventHandler2 = () => {
  console.log('Event2 Detected! Callback Function Executed.');
};
eventEmitter.on('myEvent1', myEventHandler1);
eventEmitter.on('myEvent2', myEventHandler2);
let iterationCount = 0;
const maxIterations = 5; 

const mainLoop = () => {
  if (iterationCount >= maxIterations) {
    console.log('Maximum iterations reached. Stopping the loop.');
    return;
  }

  console.log('Listening for events...');

  eventEmitter.emit('myEvent1');
eventEmitter.emit('myEvent2');

  iterationCount++;

  setTimeout(mainLoop, 1000);
};


mainLoop();

