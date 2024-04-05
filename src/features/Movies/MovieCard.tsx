import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

export interface moviePropCard {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

export function MovieCard({ id, title, popularity, overview }: moviePropCard) {
  return (
    <div className={styles.card}>
      <img className={styles.movieImg} src="/film.jpg" alt="movie card" />

      <div className={styles.thumb}>
        <Link className={styles.link} to={`/movies/${id}`}>
          {title}
        </Link>
        <div className={styles.overview}>{overview}</div>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
