"use strict";
(() => {
    const user = {
        name: 'Jane Doe',
        age: 22,
        role: 'admin',
        permission: ['read', 'write', 'delete']
    };
    let userRole = 'admin';
    function access(role) {
        // ...
    }
    console.log(userRole);
    console.log(user);
})();
