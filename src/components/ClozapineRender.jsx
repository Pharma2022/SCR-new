import React from 'react'
import CompletedBy from './rendered components/CompletedBy'

import ClozapineSources from './rendered Clozapine components/ClozapineSources'
import Smoking from './rendered components/Smoking'
import DischargePlan from './rendered components/DischargePlan'

const ClozapineRender = () => {
  return (
    <div className='render container flex-col'>
        <CompletedBy/>
        <ClozapineSources/>
        <Smoking/>
        <DischargePlan/>
 
    </div>
  )
}

export default ClozapineRender