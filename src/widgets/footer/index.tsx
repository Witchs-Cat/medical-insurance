import React from 'react'

import { WidthWrapper } from '@/shared'

import './styles.css'

export const Footer : React.FC = () => {
  return (
    <footer className="footer">
      <WidthWrapper>
        <div className="footer__wrapper">
          <p>© 2023 Права не защищены</p>  
          <a className="footer__discord-ref" href="https://discord.gg/m28ygRhuTM"> 
              <img className="footer__icon" src="./images/icons/discord.ico" alt = ""/>
              <span>Наш дискорд</span>
          </a>    
          <a className="footer__vk-ref" href="https://vk.me/join/ALhbOD/_a4bp89xKOMU4GznCgh4G4UfH3ew="> 
            <img className="footer__icon" src="./images/icons/vk.ico" alt = ""/>
            <span>Наш вк</span>
          </a>    
        </div> 
      </WidthWrapper>
    </footer>
  )
}