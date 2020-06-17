import React from 'react';
 
//import './Button.css';
export default class Button extends React.Component{
   
    constructor(props)
  {
    super(props);
    this.state= {
      counter1: 0
                }
  }
  incCake=() => {
      if(this.state.counter1<(this.props.uplimit))
      {
      this.setState(
          {
              counter1: this.state.counter1 + 1
            
          });
        }
  }
  decCake=() => {
      if(this.state.counter1!==0)
      {
    this.setState(
        {
            counter1: this.state.counter1 - 1
          
        });
      } 
}

    render()
    {
    return ( 
        <div>
            <h2 >{this.props.name} : {this.state.counter1}</h2>
            
    <button onClick={this.incCake}>{this.props.name} +</button>;
    <button onClick={this.decCake}>{this.props.name} -</button>;

    </div>
    );
    }

}