import { Paper } from "@mui/material";
import "./Card.css";

function Card({ elevation = null, children }) {
  return elevation === null || elevation === undefined ? (
    <Paper className="card">
      <div className="cardInner"> {children}</div>
    </Paper>
  ) : (
    <Paper className="card" elevation={elevation}>
      <div className="cardInner"> {children}</div>
    </Paper>
  );
}

export default Card;
