import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";


const Card = ({data, reference}) => {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.15}} dragElastic={0.5} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='flex-shrink-0 relative w-44 h-56 bg-zinc-800 rounded-3xl text-white overflow-hidden py-5 px-3 leading-tight tracking-[.01vw] text-sm cursor-pointer'>
        <FaRegFileAlt/>
        <h5 className='my-5'>{data.desc}</h5>
            <div className='w-full flex items-center justify-between px-2  mt-10'>
                <h5>{data.size}</h5>
                    <span className='w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center'>
                        {data.down ? <IoCloseOutline /> :<MdOutlineFileDownload size="1em" color='#fff' /> }
                    </span>
            </div>
            {data.tag.isOpen && (
            <div className='absolute left-0 bottom-0 w-full py-3 bg-green-600 flex items-center justify-center'>
            <h5 className='text-xs' >{data.tag.tagTitle}</h5>
        </div>)}
    </motion.div>
    </>
  )
}

export default Card