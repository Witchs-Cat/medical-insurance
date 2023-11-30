import React from 'react'

import './wrapper.css' 

function Wrapper({children} : {children: React.ReactNode}) {
  return <div className='wrapper'>
        {children}
    </div>
}

export default Wrapper