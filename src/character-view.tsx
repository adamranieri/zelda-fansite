import React, { useState } from 'react';

export function CharacterViewer(){

    //hooks are special functions that 'hook' into the life of a component
    // useState() => rerender a component when the state of a selected variable changes. You do not have to manually write render functions
    // React will do it for you

    // useState returns an ARRAY with two objects in it
    // [var1,var2] is a helpful syntax for getting the first to elements in the array and defining them as variables
    // the first variable is a READONLY variable containing the state.
    // the second variable is a function that is used to REPLACE the current state with a new one
    const [character,setCharacter] = useState({
        name:"link", 
        title:"Hero of time", 
        desc:"Link is the main protagonist in the Legend of Zela Series"
    });

    // anytime you call setCharacter React knows that the state has changed
    // because the state has changed React will REACT and renrender the stateful values in your component

    function showLink(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
       setCharacter({
            name:"link", 
            title:"Hero of time", 
            desc:"Link is the main protagonist in the Legend of Zela Series"
        })
        console.log(character);
    }

    function showZelda(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setCharacter({
            name:"zelda",
            title:"Princess of Hyrule",
            desc:"Princess of Hyrule and namesake of the series"
        })
        console.log(character);
    }

    function showGannondorf(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setCharacter({
            name:"Gannondorf",
            title:"King of the Gerudo",
            desc:"The dark king of evil"
        })
        console.log(character);
    }

    return <>

        <h3>{character.name}</h3>
        <h6>{character.title}</h6>
        <p>{character.desc}</p>


        <button onClick={showLink}>Link Info</button>
        <button onClick={showZelda}>Zelda Info</button>
        <button onClick={showGannondorf}>Gannondorf Info</button>
    
    </>
}