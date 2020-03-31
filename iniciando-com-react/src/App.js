import React from 'react';
import logo from './logo.svg';
import './App.css';

function ComponenteFuncional() {
  return (
    <h1>Hello</h1>
  );
}

class App extends React.Component{

  state = {
    nome : "Moacir Bertolezo"
  }

  modificarNome = (event) =>{
      this.setState({
          nome: event.target.value
      })  
  }

  criaComboBox = () => {
      const opcoes = ["Fulano","Cicrano"]
      const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
      return (
        <select>
            {comboBoxOpcoes}
        </select>
      )
  }

  componentDidMount(){
     console.log("Executou componentDidMount");
  }

   render(){
     console.log("Executou render");
     const MeuComboBox = () => this.criaComboBox()
     
     return (
       <>
         <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
         <h1>Hello {this.state.nome}</h1>
         {this.criaComboBox()}
       </> 
     )
   }
}

export default App;
