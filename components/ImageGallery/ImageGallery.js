import React from 'react'
import {motion} from 'framer-motion'

const ImageGallery = ({imageList}) => {
  return (
    <div className='mx-auto pt-[3rem]'>
        <div className=' xl:columns-3  lg:columns-2 columns-1'>
            {imageList && imageList?.map((el , i) => 
                <motion.img initial={{y:100 , opacity: 0}} animate={{y:0 , opacity:1}} transition={{delay: i * 0.5}} layout alt={el?.id} key={el?.id} className="cursor-pointer hover:grayscale transition-all duration-300 p-5" src={el?.data?.imageUrl} />
            )}
                       
        </div>
    </div>
  )
}

export default ImageGallery