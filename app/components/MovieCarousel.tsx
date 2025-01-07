// app/components/MovieCarousel.tsx
import { Movie } from '../../types';

interface MovieCarouselProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  selectedMovie: Movie | null;
}

export default function MovieCarousel({ movies, onSelectMovie, selectedMovie }: MovieCarouselProps) {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div 
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className={`flex-none relative w-[200px] cursor-pointer ${
              selectedMovie?.id === movie.id ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            <div className="relative w-full aspect-[2/3]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-semibold text-sm">
                    {movie.title}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    {movie.vote_average.toFixed(1)} Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



 