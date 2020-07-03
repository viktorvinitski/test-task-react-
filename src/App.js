import React from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import { Row, Col } from 'antd'
import Card from './components/cards/Card/CardItem'

function App() {
  return (
    <div className="App">
      <Card/>
      
      
      <Row justify='center'>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
        <div className={App.raws}>
          <Col span={4}><Cards /></Col>
        </div>
      </Row>
    </div>
  );
}

export default App;
