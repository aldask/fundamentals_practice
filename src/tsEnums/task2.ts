/*
Define an enum for a list of days of the week that includes Monday, Tuesday, Wednesday, 
etc. Use the enum to create a function that takes a day of the week as an argument and returns a string that says "Today is [day]."
*/

enum Days {
    Monday,
    Tuesday,
    Wednesday,
};
//test
console.log(Days[0]);

const whatDay = (day: Days): string => {
    switch (day) {
        case Days.Monday:
            return `Today is ${Days[day]}`;
        case Days.Tuesday:
            return `Today is ${Days[day]}`;
        case Days.Wednesday:
            return `Today is ${Days[day]}`;
        default:
            return 'Invalid day';
    }
};
console.log(whatDay(0));
console.log(whatDay(2));
console.log(whatDay(1));
console.log(whatDay(4));
