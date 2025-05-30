function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];  // Return from cache
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

function slowSquare(n) {
    console.log("Calculating...");
    return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5));  // Calculating... 25
console.log(fastSquare(5));  // (From cache) 25