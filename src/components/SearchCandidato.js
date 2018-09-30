import React, { Component } from 'react'

export class SearchCandidato extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  onChange(e) {
    this.setState({value: e.target.value})
    this.props.onChange(this.state.value)
  }

  render() {
    return (
      <div>
        <div className="buscar-candidato">
          <div className='row'>
            <div className='search col-md-12'>
              <form className='form-row justify-content-center'>
                <div className='form-group col-md-6 mb-2'>
                  <label htmlFor='inputsearch' className='sr-only'>Busque por Candidato</label>
                  <input
                    type='text'
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    className='form-control'
                    id='inputsearch'
                    placeholder='Busque por estado' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchCandidato
