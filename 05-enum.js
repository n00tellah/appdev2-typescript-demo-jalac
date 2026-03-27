"use strict";
(() => {
    let Role;
    (function (Role) {
        // SuperAdmin,
        // SuperAdmin = 1,
        Role["SuperAdmin"] = "1";
        // Teacher,
        Role["Teacher"] = "Student";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    // let userRole: Role = 0;
    let userRole = Role.Teacher;
    console.log(userRole);
})();
