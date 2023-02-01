import React, { useState } from "react"


export function Greet(){

    // Everytime a state value changes it rerenders
    // rerendering will occurs thousands to millions of times
    // React is really optimized to do the minimum rerenderin of elements
    const [name,setName] = useState<string>("");

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }


    return <>

    <h3>Greeter</h3>
        <input type="text" placeholder="Impa" onChange={handleNameChange}/>
        <button>Greet Me</button>
        {name === "" ? <p>No name yet</p>:<h4>Hiya {name}</h4>}
    </>
}