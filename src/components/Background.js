import React from 'react';
import '../styles/Background.css';

const Background = () => {
  const generateHexagons = () => {
    const hexagons = [];
    for (let i = 0; i < 16; i++) {
      hexagons.push(<div className="hexagonBG" key={i}></div>);
    }
    return hexagons;
  };

  return (
    <div className="contBG">
      <div className="light"></div>
      {[...Array(10)].map((_, index) => (
        <div className="rowBG" key={index}>
          {generateHexagons()}
        </div>
      ))}
    </div>
  );
};

export default Background;
