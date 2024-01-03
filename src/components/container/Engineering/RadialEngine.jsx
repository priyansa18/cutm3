import React from 'react'

const RadialEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://radial-engine.vercel.app/"
            title="Radial Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RadialEngine