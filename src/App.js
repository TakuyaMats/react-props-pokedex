import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title">Pokedex</h1>
                <Container className="App-cards">
                    <Row>
                        <Col><Pokegame /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;