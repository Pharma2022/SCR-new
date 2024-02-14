import React, { Fragment, useEffect, useState,useRef } from 'react'
import CompletedBy from './rendered components/CompletedBy'
import Sources from './rendered components/Sources'
import Medications from './rendered components/Medications'
import Smoking from './rendered components/Smoking'
import Discrepancies from './rendered components/Discrepancies'
import Steroids from './rendered components/Steroids'
import PharmaceuticalNeeds from './rendered components/PharmaceuticalNeeds'
import Warfarin from './rendered components/Warfarin'
import Discharge from './rendered components/Discharge'
import Methadone from './rendered components/Methadone'
import VTE from './rendered components/VTE'

import Allergies from './rendered components/Allergies'
import useCopy from '../hooks/useCopy'
import { useFormContext } from '../context/formContext'

const Render = () => {

          const {containerStyles,copyToClipboard,isCopied,containerRef}=useCopy()
          const {resetForm}=useFormContext()
  return (
    <Fragment>
 
         <div className='render container flex-col' id='renderedForm' >
            <div ref={containerRef} >
              <div className="flex-col" style={containerStyles}>
                <CompletedBy/>
                <Allergies/>
                <Sources/>
                <Medications/>
                <VTE/>
                <Smoking/>
                <Discrepancies/>
                <Steroids/>
                <PharmaceuticalNeeds/>
                <Warfarin/>
                <Methadone/>
                <Discharge/>

              </div>

            </div>
            <div className="copy-button-container flex-row w-full">
            <button 
            
                className={'copy-button w-full'} 
                disabled={isCopied} 
                onClick={copyToClipboard}
                >{isCopied? 'Copied!' :'Copy'}
            </button>
            <button className={'copy-button w-full' } onClick={resetForm}>Reset</button>
            </div>


    </div>
    
 
    </Fragment>
 
  )
}

export default Render