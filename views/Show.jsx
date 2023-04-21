const React = require('react');
// const Pokemon = require('../models/PokemonSchema')


function Show(props){
    const {Pokemon} = props
    console.log(Pokemon)
        return(
        <div>
            <h1>Gotta Catch 'Em All</h1>
                <h2>{Pokemon.name}</h2>
                <br/>
            <img src={`${Pokemon.img}`}/>
            <br/>
            <a href='/pokemon'>Go To Home</a>
        </div>
    )
};

module.exports = Show;