import React, { Component } from 'react'
import axios from 'axios'

import ListCandidatos from './ListCandidatos'

class Candidatos extends Component {
  
  constructor() {
    super()
    this.state = {
      candidatos: []
    }
  }

  componentDidMount() {

    this.getCandidatos()

  }
  
  getCandidatos() {
    axios.request({
      method:'get',
      url: 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos'
    }).then((response) => {
      this.setState({candidatos: response.data.candidatos}, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  
  render() {

    const {candidatos} = this.state

    return (
      <div>
        
        <div className='main-candidatos'>
          <div className='container'>
            <div className='row'>
              <h2 className='title' >
                Candidatos a
                <span> Presidência</span>
              </h2>
            </div>

            <ListCandidatos candidatos={ candidatos } />
          </div>
        </div>

      </div>
    )
  }
}

export default Candidatos
