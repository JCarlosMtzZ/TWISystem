import React from 'react';
import NavBarU from '../components/NavBarU';
import './Game.css';
import Carousel from 'react-bootstrap/Carousel'
import map from '../img/screen1.jpeg';
import game1 from '../img/game1.jpeg';
import game12 from '../img/game12.jpeg';
import game2 from '../img/game21.jpeg';
import game21 from '../img/game21.jpeg';

function Game () {
  return (
    <div>
      <NavBarU />
      <div>
        <br/>
          <iframe width="950" height="590" src="https://i.simmer.io/@JCarlosMtzZ/arcaadventures" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Game;