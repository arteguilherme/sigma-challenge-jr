import React, { Component } from 'react'
import axios from 'axios'

import ListCandidatosMT from './ListCandidatosMT'

export class DeputadoFederal extends Component {

  constructor() {
    super()
    this.state = {
      candidatos: []
    }
  }

  componentDidMount() {

    this.getSenador()

  }


  getSenador() {
    axios.request({
      method: 'get',
      url: 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/6/candidatos'
    }).then((response) => {
      this.setState({ candidatos: response.data.candidatos }, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { candidatos } = this.state
    return (
      <div>
        <div>
          <div className='main-candidatos'>
            <div className='container'>
              <div className='row'>
                <h2 className='title' >
                  Candidatos a
                <span> Deputado Federal</span>
                </h2>
              </div>

              <ListCandidatosMT candidatos={candidatos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeputadoFederal
