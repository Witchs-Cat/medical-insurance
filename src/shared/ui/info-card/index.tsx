
import { useNavigate } from "react-router-dom"

import { BlueRoundedButton } from "@shared"

import './styles.css'

export type InfoCardProps = {
  image: string,
  title: string,
  subTitle: string,
  link: string
}

export const InfoCard : React.FC<InfoCardProps> = 
({image, title, subTitle, link}) => {
  const navigate = useNavigate()

  return (
  <div className="info-card">
    <img src={image} className="info-card__sticker" />
    <h2 className='info-card__title'>{title}</h2>
    <p className='info-card__subtitle'>{subTitle}</p>
    <BlueRoundedButton onClick={()=>navigate(link)}>
       Перейти
    </BlueRoundedButton>
  </div>
  )
}