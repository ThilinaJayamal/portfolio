import React from 'react'

function loading() {
    return (
        <div className='w-full h-[80vh] flex flex-col gap-8 justify-center items-center absolute'>
            <div
                className="inline-block h-[50px] w-[50px] animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            </div>
            <span className="text-accent text-xl font-extrabold">Loading...</span>
        </div>
    )
}

export default loading