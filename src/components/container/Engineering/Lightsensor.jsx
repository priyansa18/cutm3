import React from 'react'

const Lightsensor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lightsensor.vercel.app/"
            title="Lightsensor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Lightsensor