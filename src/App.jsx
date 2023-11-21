import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AllPuppies from './components/AllPlayers.jsx'
import './App.css'

const puppyBowl = () => {
  return(
    <div>
      <h1>Puppy Bowl </h1>
      <h2>Welcome to the 34th annual Puppy Bowl!</h2>
      <h3>Meet the Players</h3>
      <AllPuppies />
    </div>
  );
};
  

export default puppyBowl;
