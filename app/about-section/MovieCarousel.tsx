import MovieCard from "./MovieCard";
import { movies, MovieProps } from "./movieDetails";
import "../animations/animate.css";

const MovieCarousel = () => {
  return (
    <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {movies.map((movie: MovieProps, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            director={movie.director}
            image={movie.image}
            link={movie.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {movies.map((movie: MovieProps, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            director={movie.director}
            image={movie.image}
            link={movie.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
