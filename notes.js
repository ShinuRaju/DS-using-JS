// Primitive types
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (a known bug in JavaScript)
console.log(typeof Symbol());    // "symbol"


//non-primtive types
// Objects
console.log(typeof {});          // "object"
console.log(Object.prototype.toString.call({}));        // "[object Object]";
console.log({} instanceof Object);          // true


//arrays
console.log(typeof []);          // "object";
console.log(Object.prototype.toString.call([]));        // "[object Array]"
console.log([] instanceof Array);          // true
console.log(Array.isArray([]));          // true 
console.log(Array.isArray(new Array())); // true


//functions
console.log(typeof function () { });// "function"


//Map
console.log(typeof new Map());   // "object"
console.log(Object.prototype.toString.call(new Map()));  // "[object Map]"
console.log(new Map() instanceof Map);      // true


// Set
console.log(typeof new Set());   // "object"
console.log(Object.prototype.toString.call(new Set()));  // "[object Map]"
console.log(new Set() instanceof Set);      // true


//Date
console.log(typeof new Date());  // "object"
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
console.log(new Date() instanceof Date);    // true

// ====================================================

//how to check the argument in iterable or not.
// this isIterable function return true for string, array, Map, & Set

function isIterable1(obj) {
    return typeof obj[Symbol.iterator] === 'function';
}

function isIterable2(obj) {
    return typeof obj.next === 'function';
}

// Examples

//primitive
console.log(isIterable1("hello")); // true
console.log(isIterable1(123)); // false
console.log(isIterable1(true)); // false
// console.log(isIterable1(null)); // this will throw error
// console.log(isIterable1(undefined)); // this will throw error
console.log(isIterable1(Symbol())); // false

// non-primitive
console.log(isIterable1([])); // true
console.log(isIterable1({})); // false
console.log(isIterable1(function () { })); // false
console.log(isIterable1(new Map())); // true
console.log(isIterable1(new Set())); // true
console.log(isIterable1(new Date())); // true


// ===========================

// converting array to iterator
const array = [1, 2, 3, 4, 5];

// Get the iterator from the array
const iterator = array[Symbol.iterator]();

// Iterate over the elements using a for...of loop
for (const item of iterator) {
    console.log(item);
}

//converting iterator to array
const iterator1 = [1, 2, 3][Symbol.iterator](); // Example iterator

const array1 = Array.from(iterator1);

console.log(array1); // Output: [1, 2, 3]
