const curry = (fn) => {
    return function curried(...args) {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

const sum = (a, b, c) => a + b + c
const curriedSum = curry(sum)
console.log(curriedSum(100, 200, 300))
console.log(curriedSum(100)(200, 300))
console.log(curriedSum(100)(200)(300))

const sendRequest = (greet) => (name) => (message) => `${greet} ${name}, ${message}`
console.log(sendRequest('Hi')('Ivan')('Can you send me a request?'))

const getRequest = (greet, name, message) => `${greet} ${name}, ${message}`
const curriedRequest = curry(getRequest)
console.log(curriedRequest('Hi', 'Ivan', 'Can you send me a request?'))
console.log(curriedRequest('Hi')('Ivan', 'Can you send me a request?'))
console.log(curriedRequest('Hi')('Ivan')('Can you send me a request?'))
