import React, { useState } from "react"


export function RupeeCalculator(){

    const [wallet,setWallet] = useState({
        green:0,
        blue:0,
        red:0,
        silver:0
    });

    function handleGreen(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        // We need to create a BRAND NEW OBJECT that has the desired value;
        // imo the biggest in React
        const walletClone = {...wallet};// clones the object
        walletClone.green = num;
        setWallet(walletClone);// whenever you call a set function ALWAYS pass in a new object
    }

    function handleBlue(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        const walletClone = {...wallet};
        walletClone.blue = num;
        setWallet(walletClone)
    }

    function handleRed(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        const walletClone = {...wallet};
        walletClone.red = num;
        setWallet(walletClone);
    }

    function handleSilver(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        const walletClone = {...wallet};
        walletClone.silver = num;
        setWallet(walletClone);
    }

    return <>
        <h3>Rupee Calculator</h3>

        <label htmlFor="green">Green Rupee = 1 rupee</label>
        <input id="green" type="number" placeholder="0" onChange={handleGreen}/>

        <label htmlFor="blue">Blue Rupee = 5 rupee</label>
        <input id="blue" type="number" placeholder="0" onChange={handleBlue}/>

        <label htmlFor="red">Red Rupee = 20 rupee</label>
        <input id="red" type="number" placeholder="0" onChange={handleRed}/>

        <label htmlFor="silver">Silver Rupee = 100 rupee</label>
        <input id="silver" type="number" placeholder="0" onChange={handleSilver}/>


        <h4>Total Rupee value : {calculateRupeesum(wallet)}</h4>
    
    </>
}

//helper function
function calculateRupeesum(wallet:{green:number, blue:number, red:number, silver:number}):number{

        return wallet.green + wallet.blue*5 + wallet.red*20 + wallet.silver*100;
}

