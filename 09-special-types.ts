// Special Type - null
let a: null;

a = null
// a = "Hi"
// b = "Noots"

let b: null | string

b = null
b = "Hi"
b = "Noots"
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hello"

let d: undefined | string | number

d = undefined
d = "Hi"
d = "Noots"
d = 10

// d = null
console.log(a)
console.log(b)
console.log(c)
console.log(d)
