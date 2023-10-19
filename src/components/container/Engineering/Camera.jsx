import React from 'react'

const Camera = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://camera-three-sigma.vercel.app/"
            title="Camera"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Camera