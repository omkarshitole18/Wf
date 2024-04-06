const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

customEmitter.on('event1', () => {
    console.log('Event 1 detected!');
});

customEmitter.on('event2', (data) => {
    console.log('Event 2 detected with data:', data);
});
customEmitter.on('event3', (data1, data2) => {
    console.log('Event 3 detected with data:', data1, data2);
});
console.log('Main loop started. Press Ctrl+C to exit.');

process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
if (userInput === '1') {
        customEmitter.emit('event1');
    } else if (userInput === '2') {
        customEmitter.emit('event2', 'Custom Data for Event 2');
    } else if (userInput === '3') {
        customEmitter.emit('event3', 'Data 1', 'Data 2');
    } else if (userInput.toLowerCase() === 'exit') {
        console.log('Exiting the application.');
        process.exit();
    } else {
        console.log('Invalid input. Try 1, 2, 3, or type "exit" to exit.');}
});
process.on('SIGINT', () => {
    console.log('Received Ctrl+C. Exiting the application.');
    process.exit();
});
