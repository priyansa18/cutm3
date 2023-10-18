import React from 'react'

const Transformer = () => {
    return (
        <div className='flex justify-center items-center '>
            <iframe
                src="https://transformer-omega.vercel.app/"
                title="Transformer"
            className='h-screen w-full'
            style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default Transformer