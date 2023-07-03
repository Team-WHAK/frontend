import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Panel, Placeholder, } from 'rsuite';
import '../styles/Home.css';
import Chat from '../components/Chat';

const Card = ({ title }) => (
  <Panel bordered header={title} className="home-card">
    <Placeholder.Paragraph />
  </Panel>
);

const Home = ({ currentUser }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const sender = 'ChatGPT'; 

  const handleChatToggle = () => {
    console.log('Toggle chat');
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div id='portal'>
      <h1 className='welcome animate__animated animate__fadeInDown animate__slower 3s animate__delay-1s	1s' 
      >DASHBOARD {currentUser} </h1>
      <div className="shadow">
        <div className="card-container">
          <div className="index-hex animate__animated animate__fadeInLeft animate__slower	3s">
            <a href="/indexpage" style={{ textDecoration: 'none', color: '#000000' }}>
              <Card title="My Tasks " />
            </a>
          </div>
          <div className="new-hex animate__animated animate__fadeInDown animate__slower	3s" style={{ marginBottom: '27vw', }}>
            <a href="/new" style={{ textDecoration: 'none', color: '#000000' }}>
              <Card title="Add Task" />
            </a>
          </div>
          <div onClick={handleChatToggle}>
            <div className="chat-hex animate__animated animate__fadeInRight animate__slower	3s" >

              <Card title="Chat" />
            </div>
          </div>
        </div>
      </div>
      {isChatOpen && <Chat sender={sender} />}

    </div>
  );
};

export default Home;