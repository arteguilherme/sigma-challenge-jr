import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header'

import Home from './components/Home'
import Governador from './components/Governador'
import Senador from './components/Senador'
import DeputadoFederal from './components/DeputadoFederal'
import DeputadoEstadual from './components/DeputadoEstadual'
import PresidenteDetalhes from './components/PresidenteDetalhes'
import CandidatosMTDetalhes from './components/CandidatosMTDetalhes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/governador' component={Governador} exact />
              <Route path='/senador' component={Senador} exact />
              <Route path='/deputadofederal' component={DeputadoFederal} exact />
              <Route path='/deputadoestadual' component={DeputadoEstadual} exact />
              <Route path='/detalhes/:id' component={PresidenteDetalhes} exact />
              <Route path='/detalhesmt/:id' component={CandidatosMTDetalhes} exact />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
