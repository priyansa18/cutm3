import React from 'react'

const MatekPowerHub = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://matek-power-hub.vercel.app/"
            title="Matek Power Hub"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MatekPowerHub