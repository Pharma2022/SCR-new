
import { useRef ,useState} from 'react'
const useCopy = () => {

    const containerRef=useRef() 
          const [isCopied,setIsCopied]=useState(false)        

          const copyRenderHtml=async()=>{
              const content=containerRef.current
              const blobHtml = new Blob([content.innerHTML], { type: "text/html" })
              const blobText = new Blob([content.innerText], { type: "text/plain" })
              const data = [new ClipboardItem({
                ["text/plain"]: blobText,
                ["text/html"]: blobHtml,})]

              await navigator.clipboard.write(data)
          }

          const copyToClipboard=async()=>{
                copyRenderHtml()
                setIsCopied(true)
                setTimeout(() =>   setIsCopied(false)
                , 1500) 
          }


          const containerStyles={display:'flex',flexDirection:'column',boxSizing:'border-box',fontFamily:'Arial'}


  return {containerStyles,copyToClipboard,isCopied,containerRef}
}

export default useCopy