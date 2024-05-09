if (typeof Promise === 'undefined') {
  window.Promise = function (executor) {
    var resolve = function () { };
    var reject = function () { };
    var promise = this;

    this.then = function (onResolved, onRejected) {
      return new Promise(function (resolve, reject) {
        function handle(callback) {
          try {
            var result = callback(promise.value);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }
        if (promise.state === 'fulfilled') {
          handle(onResolved);
        } else if (promise.state === 'rejected') {
          handle(onRejected);
        } else {
          promise.resolvedCallbacks.push(function () {
            handle(onResolved);
          });
          promise.rejectedCallbacks.push(function () {
            handle(onRejected);
          });
        }
      });
    };

    function resolve(value) {
      if (promise.state === 'pending') {
        promise.state = 'fulfilled';
        promise.value = value;
        promise.resolvedCallbacks.forEach(function (callback) {
          callback();
        });
      }
    }

    function reject(reason) {
      if (promise.state === 'pending') {
        promise.state = 'rejected';
        promise.value = reason;
        promise.rejectedCallbacks.forEach(function (callback) {
          callback();
        });
      }
    }

    this.state = 'pending';
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  };
}
