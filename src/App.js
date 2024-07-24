import React, { Component } from 'react';
import './App.css'
class App extends Component{



  constructor(props){
    super(props)
    this.state = {
      textoFrase:''
    };
      

    this.quebraBiscoito = this.quebraBiscoito.bind(this);


    this.frases = ['A vida é uma jornada, não um destino.',
      'Grandes conquistas estão à sua frente.',
      'Você é mais forte do que imagina.',
      'A felicidade está ao seu alcance.',
      'Acredite em si mesmo e tudo será possível.',
      'Hoje é um dia perfeito para começar algo novo.',
      'A sorte favorece os corajosos.',
      'Suas qualidades internas irão brilhar.',
      'Algo maravilhoso está prestes a acontecer.',
      'Você atrairá boa sorte em breve.']
  }

  quebraBiscoito(){

    let  state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){

    return(

      <div className="container">
        <img src= {require('./assets/biscoito.png')}  className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn = {this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{

  render(){
    return(
      <div>

        <button onClick={this.props.acaoBtn} >{this.props.nome}</button>

      </div>

    );
  }
}

export default App;