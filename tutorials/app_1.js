/* The events module is inbuilt in Node.js */

const EventEmitter = require("events");
// New instance of EventEmitter
const eventEmitter = new EventEmitter();

//Event Driven Programming

//Adding a listener to the eventEmitter object 
eventEmitter.on( 'tutorial' , () => {
  console.log("Tutorial event has occured");
})

//The above function works iff an event has been emitted
eventEmitter.emit("tutorial");

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

let sidd = new Person("Sidd");

//sidd is an instance of the EventEmitter class
sidd.on('name', () => {
  console.log('my name is : ' + sidd.name);
})
sidd.emit('name');
