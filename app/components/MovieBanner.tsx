
// app/components/MovieBanner.tsx
import { Movie } from '../../types';

interface MovieBannerProps {
  movie: Movie;
}

export default function MovieBanner({ movie }: MovieBannerProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"> {/* Responsive height */}
      <div 
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              {movie.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-2 sm:mb-4 max-w-xl md:max-w-2xl">
              {movie.overview}
            </p>
            <div className="flex gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm bg-yellow-400 text-black px-2 sm:px-4 py-1 rounded-full">
                IMDB: {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-xs sm:text-sm bg-white/20 text-white px-2 sm:px-4 py-1 rounded-full">
                Released: {new Date(movie.release_date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
