"use strict";
let hobbies = ["Eating", "Watching"];
// hobbies.push(10)
// let userList: (string | number)[];
let userList;
userList = ["Estela", "Estela123", 123456];
// console.log(userList)
let user = {
    name: "Estela",
    age: 22,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
};
// Must not null or undefined
let val = "Estela Jalac";
// Flexible Object - Record Type
let data;
data = {
    1: 1,
    name: 'Estela',
    isStudent: true
};
console.log(hobbies);
console.log(userList);
console.log(`name: ${user.name}`);
console.log(`age: ${user.age}`);
console.log(`hobbies: ${user.hobbies}`);
console.log(`role: ${user.role.description}, id: ${user.role.id}`);
console.log(val);
console.log(data);
