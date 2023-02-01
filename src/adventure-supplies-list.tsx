import { useState } from "react"


export function AdventureSupplyList(){

    const [item,setItem] = useState<string>("");
    const [supplies,setSupplies] = useState<string[]>([]);

    function handleItem(event:React.ChangeEvent<HTMLInputElement>){
        setItem(event.target.value);
    }

    function addItem(){
        const suppliesClone = [...supplies];// clones the array
        suppliesClone.push(item);
        setSupplies(suppliesClone);
    }


    return <>
        <h3>Adventure Supplies</h3>

        <input type="text" placeholder="bombchu" onChange={handleItem}/> 
        <button onClick={addItem}>Add</button>

        <ul>
            {supplies.map(s => <li>{s}</li>)}
        </ul>
    
    </>
}