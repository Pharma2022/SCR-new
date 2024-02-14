import React from 'react'

const ContactItemProperty=({copy,isCopied,text,type})=>(  

    <span className={`flex-row copy-container `}>
        <p onClick={copy} 
           className="email break-all"  >
            <span className='bold type pointer-no-underline'>
                {type}:{` `} 
            </span> 
            <span className={copy&&`pointer`}>
                {text}
            </span>
           {isCopied&& 
            <span className='copy-button keep-all'>
                Copied!
            </span>}
        </p>

    </span>)

export default ContactItemProperty