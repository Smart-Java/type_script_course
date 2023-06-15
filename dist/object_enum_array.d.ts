declare const person: {
    name: string;
    course: string;
    course_module: number;
    activities: string[];
    role: (string | number)[];
};
declare const person_tuple: {
    name: string;
    course: string;
    course_module: number;
    activities: string[];
    role: [number, string];
};
declare enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    AUTHOR = 2
}
declare const person_enum: {
    name: string;
    course: string;
    course_module: number;
    activities: string[];
    role: Role;
};
