import React from 'react';
import { AdventureSupplyList } from './adventure-supplies-list';
import { CharacterViewer } from './character-view';
import { Greet } from './greeter';
import { RupeeCalculator } from './rupee-calculator';


function App() {

  return <>
      <h1>Welcome to my Zelda Fanpage</h1>
      <CharacterViewer></CharacterViewer>
      <Greet></Greet>
      <RupeeCalculator></RupeeCalculator>
      <AdventureSupplyList></AdventureSupplyList>
    </>
}

export default App;
