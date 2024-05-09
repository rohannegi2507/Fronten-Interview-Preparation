


const obj = {
    name:'rohan',
    getName(){
        console.log(this.name)
    }
}

console.log(obj.getName())


var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object1 = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object1.method(callback, 1, 2);


const object2 = {
    message: 'Hello, World!'
  };
  
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }

  logMessage.apply(object2)



  const object3 = {
    message: 'Hello, World!',
  
    logMessage() {
      console.log(this.message); // What is logged?
    }
  };
  
  setTimeout(object3.logMessage.bind(object3), 1000);