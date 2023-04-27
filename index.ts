// const person: {
//     name: string;
//     course: string;
//     course_module: 2;
// } = {
    const person = {
    name : 'Victor',
    course : 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading']
};

console.log(person.name);
for (const activity of person.activities) {
    console.log(activity);
    // if (Object.prototype.hasOwnProperty.call(person.activity, activity)) {
    //     const element = person.activity[activity];
    //     console.log(element);
    // }
}
