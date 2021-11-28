import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
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