import { connect } from "react-redux";
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";
import styles from "./MovieCard.module.scss";

interface MovieProps {
  movies: Movie[];
}

function Movies({ movies }: MovieProps) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            popularity={m.popularity}
            overview={m.overview}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateProps);

export default connector(Movies);
