function multiply(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Both arguments must be numbers.'));
      } else {
        resolve(a * b);
      }
    });
  }
  
  // Using the promisified function
  multiply(2, 3)
    .then(result => {
      console.log(result); // Output: 6
    })
    .catch(error => {
      console.error(error.message);
    });
  