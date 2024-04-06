const events = require('events');

const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
  console.log(`Event Detected! Callback Function Executed.`);
};


eventEmitter.on('myEvent', myEventHandler);


let iterationCount = 0;
const maxIterations = 5; 

const mainLoop = () => {
  if (iterationCount >= maxIterations) {
    console.log('Maximum iterations reached. Stopping the loop.');
    return;
  }

  console.log('Listening for events...');

  eventEmitter.emit('myEvent');

  iterationCount++;

  setTimeout(mainLoop, 1000);
};


mainLoop();

