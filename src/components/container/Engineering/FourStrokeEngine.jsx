import React from 'react'

const FourStrokeEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://4-stroke-engine.vercel.app/"
            title="Four Stroke Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default FourStrokeEngine