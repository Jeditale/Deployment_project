export interface Movie {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
  }
  
  export class MovieManager {
    private movies: Movie[] = [];
  
    addMovie(movie: Movie): void {
      this.movies.push(movie);
    }
  
    getMovies(): Movie[] {
      return this.movies;
    }
  
    findMovieById(id: number): Movie | undefined {
      return this.movies.find(movie => movie.id === id);
    }
  
    removeMovie(id: number): boolean {
      const index = this.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        this.movies.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  