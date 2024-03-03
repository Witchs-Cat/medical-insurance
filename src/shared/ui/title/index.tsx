import React from 'react'

import './styles.css'

type TitleModel = {
  text: string
}

export const Title: React.FC<TitleModel> = 
  ({text}) => {
  return (
    <h2 className='title'>{text}</h2>
  )
}
