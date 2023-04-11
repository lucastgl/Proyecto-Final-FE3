import React from 'react'
import imagen from "../imgs/Digital-House.jpg"
import { StyledFooter } from '../Styles/styledComponent';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Powered by</p>
      <img src={imagen} alt='DH-logo'/>
    </StyledFooter>
    
  )
}

export default Footer;