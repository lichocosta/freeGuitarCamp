import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props) {
  return (
    <div className='container'>
      <img 
        className='image'
        src={require(`../imgs/${props.image}.jpg`)}
        alt='Dann Huff'
      />
      <div className='container-text'>
        <p className='name'>
          <strong>{props.name}</strong> de {props.country}
        </p>
        <p className='band'>
          {props.charge} en <strong>{props.band}</strong>
        </p>
        <p className='text'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default Testimonio;