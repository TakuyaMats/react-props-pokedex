import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        // let PokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        return (
            <div> 
                <Card className="Pokecard-card">
                    <Card.Title className="Pokecard-title">Charmander</Card.Title>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
                    <Card.Body>
                        <Card.Text>
                            Type: fire
                        </Card.Text>
                        <Card.Text>
                            Exp: 62
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Pokecard;