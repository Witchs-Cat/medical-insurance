import React from 'react'
import Wrapper from '../warapper/Wrapper'

import './footer.css'

const Footer : React.FC = () => {
  return <footer className="footer">
    <Wrapper>
      <div className="footer__wrapper">
        <p>© 2023 Права не защищены</p>  
        <a className="footer__discord-ref" href="https://discord.gg/m28ygRhuTM"> 
            <img className="footer__icon" src={require("./icons/discord.ico")} alt = ""/>
            Наш дискорд
        </a>    
        <a className="footer__vk-ref" href="https://vk.me/join/ALhbOD/_a4bp89xKOMU4GznCgh4G4UfH3ew="> 
            <img className="footer__icon" src={require("./icons/vk.ico")} alt = ""/>
            Наш вк
        </a>    
      </div> 
    </Wrapper>

  </footer>
}

export default Footer