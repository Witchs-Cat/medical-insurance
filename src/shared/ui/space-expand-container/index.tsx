import React from 'react'

import './styles.css'

type SpaceExpandContainerProps = {
  children: React.ReactNode
}

export const SpaceExpandContainer:React.FC<SpaceExpandContainerProps> = 
({children}) => {
  return (
    <div className="space-expand-container">
      {children}
    </div>
  )
}
