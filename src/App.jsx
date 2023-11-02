import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <div>
          <Row>
            <Col md={3} sm={3}>
              <Routes>
                <Route path="/" element={<Menu />} />
              </Routes>
            </Col>
            <Col md={9} sm={9}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Registerpage />} />
              </Routes>
            </Col>
          </Row>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;