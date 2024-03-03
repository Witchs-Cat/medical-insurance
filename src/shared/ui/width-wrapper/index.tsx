import React from 'react'

import './styles.css'

type WidthWrapperArgs = {
  maxWidth?: string, 
  children: React.ReactNode
}

export const WidthWrapper : React.FC<WidthWrapperArgs> = 
  ({maxWidth, children}) => {
    if (maxWidth == undefined)
      return (  
        <div className='width-wrapper'>
          {children}
        </div>
      )

    return (
      <div className='width-wrapper' style={{maxWidth: maxWidth}}>
        {children}
      </div>
    )
  }
