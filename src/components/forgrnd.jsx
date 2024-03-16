import React, { useRef } from 'react'
import Card from "./Card"

const forgrnd = () => {

        const ref = useRef(null)

    const data = [
        {
            desc: "Lorem, ipsum dolor elit consectetur adipisicing elit. Adipisci?",
            size: "0.9mb",
            down: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        }, 
        {
            desc: "Lorem, ipsum dolor elit consectetur adipisicing elit. Adipisci?",
            size: "0.4mb",
            down: true,
            tag: {isOpen: false, tagTitle: "Download Now"}
        },
        {
            desc: "Lorem, ipsum dolor elit consectetur adipisicing elit. Adipisci?",
            size: "0.1mb",
            down: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
    ];
  return (
    <div ref={ref} className='w-full h-screen fixed p-5 top-0 left-0 z-[3] flex gap-10 flex-wrap'>
    {data.map((item, index) =>(
        <Card data={item}  reference={ref}/>
    ))}
    </div>
  )
}

export default forgrnd