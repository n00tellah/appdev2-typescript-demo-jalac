(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = '1',
        // Teacher,
        Teacher = 'Student',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.Teacher;
    console.log(userRole)
})()