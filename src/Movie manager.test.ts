import { Movie, MovieManager } from './Movie';

describe('MovieManager', () => {
  let movieManager: MovieManager;
  const movie1: Movie = { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 };
  const movie2: Movie = { id: 2, title: 'Interstellar', director: 'Christopher Nolan', releaseYear: 2014 };
  const movie3: Movie = { id: 3, title: 'The Matrix', director: 'The Wachowskis', releaseYear: 1999 };

  beforeEach(() => {
    movieManager = new MovieManager();
  });

  test('should add a movie to the collection', () => {
    movieManager.addMovie(movie1);
    expect(movieManager.getMovies()).toContain(movie1);
  });

  test('should return all movies in the collection', () => {
    movieManager.addMovie(movie1);
    movieManager.addMovie(movie2);
    expect(movieManager.getMovies()).toEqual([movie1, movie2]);
  });

  test('should find a movie by ID', () => {
    movieManager.addMovie(movie1);
    movieManager.addMovie(movie2);
    const foundMovie = movieManager.findMovieById(2);
    expect(foundMovie).toEqual(movie2);
  });

  test('should return undefined if movie not found by ID', () => {
    movieManager.addMovie(movie1);
    const foundMovie = movieManager.findMovieById(99); // Non-existing ID
    expect(foundMovie).toBeUndefined();
  });

  test('should remove a movie by ID', () => {
    movieManager.addMovie(movie1);
    movieManager.addMovie(movie2);
    const removed = movieManager.removeMovie(1);
    expect(removed).toBe(true);
    expect(movieManager.getMovies()).toEqual([movie2]);
  });

  test('should return false when trying to remove a non-existing movie', () => {
    movieManager.addMovie(movie1);
    const removed = movieManager.removeMovie(99); // Non-existing ID
    expect(removed).toBe(false);
  });
});
