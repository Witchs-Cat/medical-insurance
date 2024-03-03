import React from 'react'

import "./styles.css"

type ButtonArgs = {
  children: string,
  onClick: React.EventHandler<React.MouseEvent>
}

export const WhiteRoundedButton : React.FC<ButtonArgs> = 
  ({children, onClick}) => {
    return (
      <button className='white-rounded-button' onClick={onClick}>
        {children}
      </button>
    )
}
