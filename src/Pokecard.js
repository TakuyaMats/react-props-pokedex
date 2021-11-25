import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div> 
                <Card className="Pokecard-card">
                    <Card.Title className="Pokecard-title">{this.props.name}</Card.Title>
                    <Card.Img variant="top" src={imgSrc} alt={this.props.name}/>
                    <Card.Body>
                        <Card.Text>
                            Type: {this.props.type}
                        </Card.Text>
                        <Card.Text>
                            Exp: {this.props.base_experience}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Pokecard;