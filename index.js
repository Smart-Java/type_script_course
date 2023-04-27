// const person: {
//     name: string;
//     course: string;
//     course_module: 2;
// } = {
var person = {
    name: 'Victor',
    course: 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading']
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
