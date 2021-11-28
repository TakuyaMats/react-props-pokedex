import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
    render() {
        const refreshPage = (event) => {
            event.preventDefault();
            window.location.reload()
        }

        return (
            <div>
                <h1 className="App-title">Pokedex</h1>
                <Container className="App-cards">
                    <Row>
                        <Col><Pokegame /></Col>
                    </Row>
                </Container>
                <Button className="App-Button" variant="primary" onClick={refreshPage}>Play Game!</Button>
            </div>
        )
    }
}

export default App;