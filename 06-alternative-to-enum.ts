(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'student'

    userRole = 'student'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        // ...
    }

    function anotherAccess(role: 'admin' | 'guess' | 'teacher' | 'student') {
        console.log(`Access granted for ${role}`)
    }

    access('teacher')
    access('admin')
    access('guess')
    access('student')
    anotherAccess('teacher')

    console.log(userRole)
})()
