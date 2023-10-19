import React from 'react'

const RaspberryPiZero = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://raspberry-pi-zero-2-w.vercel.app/"
            title="RaspberryPiZero"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RaspberryPiZero