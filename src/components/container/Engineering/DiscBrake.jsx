import React from 'react'

const DiscBrake = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://discbrake-inky.vercel.app/"
            title="DiscBrake"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DiscBrake