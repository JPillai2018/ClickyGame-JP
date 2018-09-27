import React from "react";
import "./Score.css";
//import Arrow from "react-icons/lib/fa/caret-right";
// This will render the card images. Styles are being imported. Each component has its own styles
const Score = props => (
	<div className="gameScoreStatus">
        {/* <h3 className="gameScore">Your Score <Arrow /> {props.total}</h3> */}
        <h3 className="gameStatus">{props.status}      Your TotalScore: {props.total}</h3>
        {/* <h3 className="gameScore">Total Score: {props.total}</h3> */}
    </div>
);

export default Score;
// 