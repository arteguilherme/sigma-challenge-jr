import React from 'react'
import { NavLink } from 'react-router-dom'


const ListCandidatos = (props) => (
    <div>
      <div className='list-candidatos'>

        <div className='row'>
            {
              props.candidatos.map((candidato) => {
                  return (
                    <div key={candidato.id} className='col-md-2 mb-4'>
                      <div className='card mb-2 shadow-sm'>
                        <NavLink to={{
                          pathname: `/detalhes/${candidato.id}`,
                          state: { candidatos: candidato.id }
                        }}>
                      
                          <img 
                            className='card-img-top' 
                            data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail' alt='Thumbnail [100%x225]' 
                            style={{ height: '225', width: '100%', display: 'block' }} 
                            src={ candidato.fotoUrl } 
                            data-holder-rendered='true' />
                          <div className='card-body'>
                            <h4 className='card-text'>{ candidato.nomeUrna }</h4>
                            <p className='card-text'><span>{ candidato.numero }</span> { candidato.partido.sigla }</p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    
                  )
              })
            }
        </div>
      </div>
    </div>

)

export default ListCandidatos
