import { AnimatePresence , motion} from 'framer-motion'
import React, { useEffect } from 'react'

const ImageModal = ({isModal , setIsModal, picture}) => {


  useEffect(() => {
    if(isModal){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'unset'
    }
  } , [isModal])
    
  return (
    <AnimatePresence>
    {isModal && 
    <motion.div transition={{duration: 1}} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}  className='fixed py-[40px] w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.5)]' onClick={() => setIsModal(false)} >
        <img loading='lazy' src={picture} className='object-contain pointer-events-none w-max m-auto xl:max-w-[80%] max-w-[90%] h-[calc(100%-20px)]' />
    </motion.div>
    }
    
    </AnimatePresence>
  )
}

export default ImageModal