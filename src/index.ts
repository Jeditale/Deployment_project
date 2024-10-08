import { Movie, MovieManager } from './Movie';


const movieManager = new MovieManager();


const movie1: Movie = { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 };
const movie2: Movie = { id: 2, title: 'Interstellar', director: 'Christopher Nolan', releaseYear: 2014 };
const movie3: Movie = { id: 3, title: 'The Matrix', director: 'The Wachowskis', releaseYear: 1999 };


movieManager.addMovie(movie1);
movieManager.addMovie(movie2);
movieManager.addMovie(movie3);


console.log('Movies in the collection:');
console.log(movieManager.getMovies());

// Find a movie by ID
const foundMovie = movieManager.findMovieById(2);
console.log('Found Movie:', foundMovie);

// Remove a movie
const removed = movieManager.removeMovie(1);
console.log('Movie Removed:', removed);

// Display the updated list of movies
console.log('Updated Movie List:');
console.log(movieManager.getMovies());
