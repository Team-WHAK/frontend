import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { Panel, Placeholder, Grid, Row, Col } from 'rsuite';
import '../styles/Home.css';

const Card = ({ title }) => (
  <Panel bordered header={title} className="card">
    <Placeholder.Paragraph />
  </Panel>
);

const Home = ({currentUser}) => {
  return (
    <div id='portal'>
      <h1 className='welcome' style={{ display: 'flex', justifyContent: 'center', gap: '3vw', }}>Welcome {currentUser} </h1>
      <div className="container">
        <a href="/indexpage">
          <Card title="My Tasks"/>
        </a>
        <a href="/users/calendar">
          <Card title="My Calendar"/>
        </a>
        <a href="/new">
          <Card title="Add Task"/>
        </a>
        <a href="/live-agent">
          <Card title="Live Agent"/>
        </a>
      </div>
    </div>
  );
};

export default Home;