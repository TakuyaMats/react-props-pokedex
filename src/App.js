import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Pokecard from './Pokecard';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title">Pokedex</h1>
                <Container className="App-cards">
                    <Row className="App-first-row">
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                    </Row>
                    <Row className="App-second-row">
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                        <Col><Pokecard /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;