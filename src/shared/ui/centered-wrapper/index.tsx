import React from 'react'

type CenteredContainerProps = 
React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode
}

export const CenteredWrapper: React.FC<CenteredContainerProps> = 
({children, ...props}) => {
  if(props.className == undefined)
    props.className = 'centered-wrapper'
  else
    props.className += ' centered-wrapper'

  return (
    <div {...props}>
      {children}
    </div>
  )
}
