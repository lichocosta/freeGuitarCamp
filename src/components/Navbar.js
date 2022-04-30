import React from 'react';
import '../styles/Navbar.css'

function Navbar(props) {
  return (
    <nav>
      <span className='input'>
      <img 
        className='lupita'
        src={require(`../imgs/${props.imagelupa}.svg`)}
      />
        Search 8,000+ tutorials
      </span>
      <span className='title'>freeGuitarCamp
        <span className='guitar-container'>(
          <img 
            className='guitar'
            src={require(`../imgs/${props.imagetitle}.svg`)}
          />)
        </span>
      </span>
      <div className='menu-container'>
        <button>Menu</button>
        <img 
          className='corner'
          src={require(`../imgs/${props.imagecorner}.svg`)}
        />
      </div>
    </nav>
  )
}

export default Navbar;