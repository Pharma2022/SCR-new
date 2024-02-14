import React from 'react'
import styles from './rendered components/RenderStyles'



const Title = ({children, className, notUnderlined,style}) => {


const underlineClass= notUnderlined?  {}:{...styles.bold,...styles.underline}

  return (
    <p className={`mb-0 ${!notUnderlined&& 'bold underline'} ${className}`}
      style={{...styles.arial,...styles.mb0,...underlineClass,...style}}
    >{children}</p>
  )
}

export default Title


const OrderedList= ({children, className, notUnderlined,style}) => {
  return (
    <ol  className={`mb-0 ${className}`} style={{...styles.mb0,...style}}>{children}</ol>
  )
}

export {OrderedList}

export const Para=({children,className,notUnderlined,style})=><p className="mb-0" style={{...styles.mb0,...style}}>{children}</p>