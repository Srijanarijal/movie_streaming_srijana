// app/page.tsx
'use client';
import { useEffect, useState } from 'react';  // React hooks to manage state and lifecycle methods.
import MovieBanner from './components/MovieBanner'; // Component to display the banner of the selected movie.
import MovieCarousel from './components/MovieCarousel'; // Component to display a carousel of movies.
import { Movie } from '../types'; // TypeScript interface for movie objects to enforce type safety.

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);  // State to store the list of movies.
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);  // State to track the currently selected movie.


  // useEffect to fetch movies data when the component mounts.
  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ViYTE1YzhlOTMwNmExNGMxZWQ3ZDUyYTRlNGFhMCIsIm5iZiI6MTczMjYxMjEwNC4xMTAzNDA0LCJzdWIiOiI2NzQ1OGRkMzgwYjQ0YTg5MzdiN2MzNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.f5pYhZOw9kt_ZFyPzWay-D1seZ2dOGJ43W7Mb5-a-A0';

      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
          headers: {
            'Authorization': `Bearer ${API_KEY}`, // Bearer token for authentication.
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();

        // Set the fetched movies to state and select the first movie by default.
        setMovies(data.results);
        setSelectedMovie(data.results[0]);
      } catch (error) {
        console.error('Error fetching movies:', error); // Log any errors that occur during the fetch.
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures this runs only once.

  return (
    <main className="bg-black min-h-screen"> {/* Added min-h-screen */}
      {selectedMovie && <MovieBanner movie={selectedMovie} />}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
          Popular Movies
        </h2>
        <MovieCarousel 
          movies={movies} 
          onSelectMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      </div>
    </main>
  );
}