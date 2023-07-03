import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/NotFound.css';
import Background from '../components/Background';

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };
  return (
<>

    <div id='container'>
    <Background style={{  zIndex:'-100',position: 'fixed', }} />
      <div className='txt' style={{ zIndex: '100', position: 'absolute',bottom:'900px', left:'1200px'}}>
        <h1>Honey, you've stumbled onto a page that does not exist. But don't buzz off just yet! Come back to the hive, and join the colony. </h1>
      </div>
      <div >
        <button style={{ zIndex: '100',
         position: 'absolute',
         bottom:'650px', 
         right:'1000px', 
         height: '120px', 
         width:'600px', 
         background:'none', 
         color: '#ffffff', 
         fontSize:'40px', 
         borderRadius:'90px',
          border:'6px solid #992509', 
          boxShadow: ' 6px 6px 24px #992509'}} 
          onClick={handleReturnHome}>
            Return to the Hive
            </button>
      </div>
      {/* <div className='cutePics'>
        <img src='../images/beeHive.jpeg' alt='bee' className="pic1"/>
        <img src='../images/bee1.jpeg' alt='bee' className='pic2' />
      </div> */}

    </div>

    
    </>
  );
};

export default NotFound;
