(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'admin'

    let user: User = {
        name: 'Jane Doe',
        age: 22,
        role: 'admin',
        permission: ['read', 'write', 'delete']
    }
    user.age = 23
    user.name = 'John Doe'

    // ...

    function access(role: Role) {
        // ...
    }

    console.log(userRole)
    console.log(user)
})()