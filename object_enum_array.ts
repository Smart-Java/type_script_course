// const person: {
//     name: string;
//     course: string;
//     course_module: 2;
// } = {
    const person = {
    name : 'Victor',
    course : 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: [2, 'name']
};


const person_tuple: {
    name : string;
    course : string,
    course_module: number,
    activities: string[],
    role: [number, string]
} = {
    name : 'Victor',
    course : 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: [2, 'name']
};

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person_enum = {
    name : 'Victor',
    course : 'TypeScript',
    course_module: 2,
    activities: ['Taking Courses', 'Coding', 'Reading'],
    role: Role.ADMIN
};


console.log(person.name);
for (const activity of person.activities) {
    console.log(activity);
    // if (Object.prototype.hasOwnProperty.call(person.activity, activity)) {
    //     const element = person.activity[activity];
    //     console.log(element);
    // }
}

if(person_enum.role == Role.ADMIN){
    console.log('this is an admin');
}
