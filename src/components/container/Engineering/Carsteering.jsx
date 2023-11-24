import React from 'react'

const Carsteering = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://carsteering.vercel.app/"
            title="Car Steering"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Carsteering