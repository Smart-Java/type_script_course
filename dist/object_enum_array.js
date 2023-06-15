"use strict";
const person = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: [2, 'name']
};
const person_tuple = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: [2, 'name']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person_enum = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: Role.ADMIN
};
console.log(person.name);
for (const activity of person.activities) {
    console.log(activity);
}
if (person_enum.role == Role.ADMIN) {
    console.log('this is an admin');
}
