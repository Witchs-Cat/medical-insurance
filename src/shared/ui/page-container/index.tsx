import React from 'react'

import './styles.css'

type PageContainerProps = 
React.HTMLProps<HTMLDivElement> & {
  header: React.ReactNode,
  footer: React.ReactNode,
  children: React.ReactNode
}  

export const PageContainer : React.FC<PageContainerProps> = 
({header, footer, children, ...props}) => {
  if (props.className == undefined)
    props.className = 'page-content'
  else
    props.className += ' page-content'

  return (
    <>
      {header}
      <main {...props}>
        {children}
      </main>
      {footer}
    </>
  )
}
