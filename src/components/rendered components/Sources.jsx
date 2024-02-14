import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'
import styles from './RenderStyles'
const Sources = ({children}) => {
    const {form:{SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,carerName,carerContact,nursingHome,nursingHomeStaffName,nursingHomeMar,nursingHomeContact,nursingHomeName,GP,chemist,nok,nokName,nokContact,
    hie,              
    },checkboxesArray}=useFormContext()
  return (
    <div>
      <Title>Drug History </Title>
      <Title>Sources</Title>
      {(checkboxesArray.filter(item=>item.value).length||(nok||carer||hie||GP||nursingHomeMar||nursingHome))?(<ul >
        {SCR?           <li> {'SCR'} last updated: {formatDate(SCRupdated)}     </li>:null}
        {patient?       <li> {'Patient'}                                        </li>:null}
        {eTTA?          <li> {'TTA'} {formatDate(eTTADate)}                     </li>:null}
        {pods?          <li> {'Pods'}                                           </li>:null}
        {chemist?       <li> {'Community Pharmacy'}                             </li>:null}
        {nursingHomeMar||nursingHome?  <li>Nursing Home {(nursingHomeMar&&nursingHome)?'Staff and MAR Chart ':nursingHomeMar &&'MAR Chart '} <p style={styles.mb0}> Name of NH: <span style={styles.bold}>{nursingHomeName}</span></p>  <p style={styles.mb0}> Tel: <span style={styles.bold}>{nursingHomeContact}</span> </p>
        <p style={styles.mb0}>{nursingHome&&'Staff name: '} <span style={styles.bold}>{nursingHomeStaffName}</span></p>
      
        
        
        
        </li>:null}
        
        {nok?           <li> {`${nokName} ${nokContact}` }                      </li>:null}
        {carer?         <li> {`Carer -${carerName} - ${carerContact}`}                                          </li>:null}
        {hie?           <li> {'HIE'}                                            </li>:null}
        {GP?            <li> {'GP'}                                             </li>:null}
        {children}
      </ul>): <p className='small' style={styles.small}>SCR / Patient / TTA / PODs / Carer / Nursing Home / Nursing Home Mar Chart / Community Pharmacy / Relative / HIE/ GP/</p>}
      </div>
  )
}

export default Sources