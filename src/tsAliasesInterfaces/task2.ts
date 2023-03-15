/*
Create a type alias for a movie that has a title, release year, and rating

Create a function with one argument: array of movies

Function returns array of movies sorted by release year

If two movies are released the same year - first goes with higher rating
*/

type Movie = {
    title: string,
    releaseYear: number,
    rating: number
};

const movieSorter = (movies: Movie[]): Movie[] => {
    return movies.sort((a, b) => {
        if(a.releaseYear === b.releaseYear) {
            return b.rating - a.rating;
        } else {
            return a.releaseYear - b.releaseYear;
        }
    });
};

const movies: Movie[] = [
    { title: "The Shawshank Redemption", releaseYear: 1994, rating: 9.3 },
    { title: "The Godfather", releaseYear: 1972, rating: 9.2 },
    { title: "The Dark Knight", releaseYear: 2008, rating: 9.0 },
    { title: "12 Angry Men", releaseYear: 1957, rating: 8.9 },
    { title: "Schindler's List", releaseYear: 1993, rating: 8.9 }
];

console.log(movieSorter(movies));