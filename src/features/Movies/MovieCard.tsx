import { Link } from "react-router-dom";
import "./MovieCard.css";

export interface moviePropCard {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

export function MovieCard({ id, title, popularity, overview }: moviePropCard) {
  return (
    <div className="Movies-card">
      <Link to={`/movies/${id}`}>{title}</Link>

      <div className="Movies-over">{overview}</div>
      <div className="Movies-pop">{popularity}</div>
    </div>
  );
}
