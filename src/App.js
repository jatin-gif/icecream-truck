import React from 'react';

import './App.css';

import Button from './Components/Button';



export default class App extends React.Component{
 

  
   render(){
     return (
     <div className="truck">
       <h1 className="shop">CAKE ICE-CREAM SHOP</h1>
         <div className="cake1">
          <Button name="Cake" uplimit={10} />
          </div>
          <div className="ice">
          <Button name="icecream" uplimit={20} />
          </div>
         </div>
      );
   }
}

