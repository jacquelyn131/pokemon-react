import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  //setPokemon(null);
  // pokemon = {
  //   name: "pikachu", 
  //   id: 1, 
  //   type: "electric"
  // }
  async function getPokemon() {
    // console.log('hello');
    const pokeId = randNum();
    console.log(pokeId);
    const url = `https://pokeapi.co/api/v2/pokemon/` + pokeId + `/`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    //console.log(response);
    const sprites = data.sprites;
    console.log(sprites);
    const sprite = sprites.front_default;
    console.log(sprite);
    const name = data.name;
    console.log(name);
    const stats = data.stats;
    const attack = stats[1].base_stat;
    console.log(attack);
    const defense = stats[2].base_stat;
    console.log(defense);
    const speed = stats[5].base_stat;
    console.log(speed);
    setPokemon({
      name: data.name,
      id: data.id,
      ability: data.abilities[0].ability.name,
      sprite: sprite,
      attack: attack,
      defense: defense,
      speed: speed

    })
  }
  function randNum() {
    const r = Math.floor(Math.random() * 1026);
    console.log(r);
    return (r);
  }

  function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }



  return (
    <>
      <div className='container'>
        <button className='generatePokemonBtn' onClick={getPokemon}>Get Random Pokemon</button>



        <div className='pokeInfo'>
          <h1 className='name-heading'>{pokemon && capitalizeFirstLetter(pokemon.name)}</h1>
          <p className='info-heading'>{pokemon && pokemon.id}</p>
          <img src={pokemon && pokemon.sprite} className='pokeImage'></img>
          <div className='ability-div'>
            <p className='info-heading'>Ability</p>
            <p className='info-data'>{pokemon && pokemon.ability}</p>
          </div>
          <div className='pokeStats'>
            <p className='info-heading'>Attack</p>
            <p className='info-data'>{pokemon && pokemon.attack}</p>
            <p className='info-heading'>Defense</p>
            <p className='info-data'>{pokemon && pokemon.defense}</p>
            <p className='info-heading'>Speed</p>
            <p className='info-data'>{pokemon && pokemon.speed}</p>
          </div>
        </div>
      </div>
    </>
  )
}
/*
<div className='pokeImageDiv'>
          <p>hp pokemon id</p>
          <img alt='picture of a cute pokemon'>
          </img>
        </div>
        */

export default App
