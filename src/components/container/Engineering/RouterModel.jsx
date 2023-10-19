import React from 'react'

const RouterModel = () => {
    return (
        <div className='flex justify-center items-center
        '>
            <iframe
                src="https://router-nu.vercel.app/"
                title="Router"
                className='h-screen w-full'
               // style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default RouterModel