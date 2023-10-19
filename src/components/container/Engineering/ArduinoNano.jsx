import React from 'react'

const ArduinoNano = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ardiunonano.vercel.app/"
            title="ArduinoNano"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ArduinoNano