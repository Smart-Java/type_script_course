// const person: {
//     name: string;
//     course: string;
//     course_module: 2;
// } = {
var person = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: [2, 'name']
};
var person_tuple = {
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
var person_enum = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: Role.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.activities; _i < _a.length; _i++) {
    var activity = _a[_i];
    console.log(activity);
    // if (Object.prototype.hasOwnProperty.call(person.activity, activity)) {
    //     const element = person.activity[activity];
    //     console.log(element);
    // }
}
if (person_enum.role == Role.ADMIN) {
    console.log('this is an admin');
}
