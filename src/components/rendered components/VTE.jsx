import React from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import styles from './RenderStyles'
const VTE = () => {
    const {form:{vte}}=useFormContext()
  return (
    <div>
        <Title>VTE Prophylaxis</Title>  
        {<p >VTE Prophylaxis? <span style={styles.bold}>{vte? vte:"Yes/No"}</span></p>}
        

        </div>
  )
}

export default VTE