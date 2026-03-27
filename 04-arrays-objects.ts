let hobbies = ["Eating", "Watching"]

hobbies.push("Sleeping")

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Estela", "Estela123", 123456]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Estela",
    age: 22,
    hobbies:["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Estela Jalac"

// Flexible Object - Record Type
let data: Record<string, number | string | boolean>

data = {
    1: 1,
    name: 'Estela',
    isStudent: true
}

console.log(hobbies)
console.log(userList)
console.log(val)
console.log(data)

