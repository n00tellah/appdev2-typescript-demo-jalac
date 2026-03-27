"use strict";
let age = 31;
// ...
age = '31';
age = true;
age = {};
age = [];
console.log(typeof age);
// Experimentation
let value = "hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
let maybeNull = null;
console.log(maybeNull?.toString() ?? "was null");
