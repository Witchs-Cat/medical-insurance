import React from 'react'

import "./styles.css"

type ButtonArgs = {
  children: React.ReactNode,
  onClick: React.EventHandler<React.MouseEvent>
}

export const BlueRoundedButton : React.FC<ButtonArgs> = 
  ({children, onClick}) => {
    return (
      <button className='blue-rounded-button' onClick={onClick}>
        {children}
      </button>
    )
}
