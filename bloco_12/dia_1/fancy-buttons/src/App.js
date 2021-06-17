import React from 'react';
import './App.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
     console.log(this)
     console.log('Clicou no botão!')
   }

  render () {
    console.log(this.props)
    
    return (
      <div>     
        <button onClick= { this.handleClick }>Meu botão</button>
      </div>

    );
  }
}

export default App;
