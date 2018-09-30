import React, { Component } from 'react'

export class CandidatosMTDetalhes extends Component {

  constructor() {
    super()
    this.state = {
      candidatos: []
    }
  }

  componentDidMount() {

    this.getCandidatoDetalhe()

  }


  getCandidatoDetalhe = async () => {
    const id_candidato = this.props.location.state.candidatos
    const api_call = await fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/MT/2022802018/candidato/${id_candidato}`)
    const data = await api_call.json()
    this.setState({ 
      candidatos: data,
      partidoNome: data.partido.nome,
      partidoSigla: data.partido.sigla,
      partidoNumero: data.partido.numero,
      cargo: data.cargo.nome
    })
  }

  render() {
    const candidato = this.state.candidatos
    return (
      <div>
        <div className="candidato-detalhe">
          <div className="container">
            <div className="row">
              <img
                className='img-thumbnail img-candidato'
                src={candidato.fotoUrl}
                alt={candidato.nomeCompleto}
                data-holder-rendered='true' />
              <div className="candidato-info">
                <p>Candidato</p>
                <h1>{candidato.nomeCompleto}</h1>  
                <p className='partido-nome'>{this.state.partidoNome}, {this.state.partidoSigla}</p>
                <strong>{this.state.partidoNumero}</strong>
                <ul>
                  <li><p>Cargo: {this.state.cargo}</p></li>
                  <li>Situação da Cadidatura: {candidato.descricaoSituacao}</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CandidatosMTDetalhes
