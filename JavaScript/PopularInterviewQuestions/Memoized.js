const memoized = (fn)=>{
const cache = {}

return function(...args){
    const argsToString = JSON.stringify(args)

    if(argsToString in cache){
      return cache[argsToString]
    }else{
        const res = fn.apply(this, args)
        cache[argsToString] =  res
    }
 }
}


function memoizeAsync(func) {
  const cache = new Map();
  return async function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = await func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function memoizeAsyncWithCallback(func) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    const callback = args[args.length - 1];
    if (cache.has(key)) {
      callback(null, cache.get(key));
      return;
    }
    func(...args.slice(0, -1), (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      cache.set(key, result);
      callback(null, result);
    });
  };
}




// Application
// React Memo