import React from 'react'

import { InfoCard, InfoCardProps } from '@shared'

import './styles.css'

export type InfoCardsProps = 
{
  infoCards: Array<InfoCardProps> 
}
export const InfoCards: React.FC<InfoCardsProps> = 
({infoCards}) => {
  return (
    <ul className="info-cards">
      {infoCards.map((x, index) => 
        <li key={index}>
            <InfoCard {...x}/>
        </li>)}
    </ul>
  )
}