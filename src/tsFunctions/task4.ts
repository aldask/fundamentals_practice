/*
Create a function called findShortest that takes in an array of strings and returns the shortest string 

Make sure function, variables have types defined

E.g. calling function: findShortest(['devMentor', 'TypeScript', 'fundamentals']); The result should be: devMentor
*/

const findShortest = (strings: string[]): string => {
    return strings.reduce((first, second) => second.length < first.length ? second : first);
};

console.log(findShortest(['devMentor', 'TypeScript', 'fundamentals']));