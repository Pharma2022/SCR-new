import React from 'react'

const Button=({children,...props})=>(<button className='button' type='button'  {...props}>{children}</button>)


export default Button