import React from 'react'

const FiveSpeedTransmission = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://fivespeed.vercel.app/"
            title="FiveSpeedTransmission"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default FiveSpeedTransmission