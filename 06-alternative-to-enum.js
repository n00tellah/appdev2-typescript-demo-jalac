"use strict";
// Literal Types (Alternative to Enum)
let userRole = 'student';
userRole = 'student';
// anotherUserRole = 'superadmin'
function access(role) {
    // ...
}
function anotherAccess(role) {
    console.log(`Access granted for ${role}`);
}
access('teacher');
access('admin');
access('guess');
access('student');
anotherAccess('teacher');
console.log(userRole);
