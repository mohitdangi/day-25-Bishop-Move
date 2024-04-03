import React, { useState }  from 'react'
import "./Chessboard.css";

function App() {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  const handleSquareHover = (square) => {
    setHoveredSquare(square);
  };

  const isAttackedByBishop = (square, hoveredSquare) => {
    if (!hoveredSquare) return false;
    const dx = Math.abs(square[0].charCodeAt() - hoveredSquare[0].charCodeAt());
    const dy = Math.abs(parseInt(square[1]) - parseInt(hoveredSquare[1]));

    return dx === dy;
  };
  const renderChessboard = () => {
    const squares = [];
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    for (let row = 8; row >= 1; row--) {
      for (let col = 0; col < 8; col++) {
        const square = `${letters[col]}${row}`;
        // console.log(square);
        const isDarkSquare = (row + col) % 2 !== 0;
        const isHovered = hoveredSquare === square;
        const isAttacked = isAttackedByBishop(square, hoveredSquare);
        console.log("isAttcac" + isAttacked);
        let classes = "square";
        if (isDarkSquare) classes += " dark";
        if (isHovered) classes += " hovered";
        if (isAttacked) classes += " attacked";

        squares.push(
          <div
            key={square}
            className={classes}
            onMouseEnter={() => handleSquareHover(square)}
            onMouseLeave={() => handleSquareHover(null)}
          >
            {square}
          </div>
        );
      }
    }
    return squares;
  };

  return <div className="chessboard">{renderChessboard()}</div>;
}

export default App