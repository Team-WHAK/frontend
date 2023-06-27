import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/:id');
  };
  return (
    <div id='container'>
      <div className='txt'>
        <h1>Honey, you've stumbled onto a page that does not exist. But don't buzz off just yet! Come back to the hive, and join the colony. </h1>
      </div>
      <div className='returnBtn'>
        <button style={{backgroundColor: '#992509', height:'6vw', width:'20vw', borderRadius:'2vw', color: '#ffffff',}} onClick={handleReturnHome}>Return to the Hive</button>
      </div>
      <div className='cutePics'>
        <img src='../images/beeHive.jpeg' alt='bee' className="pic1"/>
        <img src='../images/bee1.jpeg' alt='bee' className='pic2' />
      </div>
    </div>
  );
};

export default NotFound;
