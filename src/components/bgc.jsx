import React from 'react'

const bgc = () => {
    return (
        <>
            <div className='w-full h-screen py-1 fixed top-0 left-0 z-[2]'>
                <div className='w-full py-5 my-5  flex justify-center font-thin tracking-[.1vw] text-zinc-400 font-semibold'>DOCUMENTS</div>
                <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] text-zinc-800 font-extrabold'>Docs.</h1>
            </div>
        </>
    )
}

export default bgc