import React from 'react'
import { Link } from 'react-router-dom'

import './infoCard.css'


export interface IInfoCardArgs {
    image: any,
    title: string,
    subTitle: string,
    link: string
}

const InfoCard : React.FC<IInfoCardArgs> = ({image, title, subTitle, link}) => {
  return <div className="mmi-info-card">
    <img src={image} alt="" className="mmi-info-card__sticker" />
    <h2 className='mmi-info-card__title'>{title}</h2>
    <p className='mmi-info-card__subtitle'>{subTitle}</p>
    <Link to={link} className='mmi-info-card__follow blue-rounded-button'>
        Перейти
    </Link>
  </div>
}

export default InfoCard
