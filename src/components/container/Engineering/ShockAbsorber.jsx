import React from 'react'

const ShockAbsorber = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://shockabsorber.vercel.app/"
            title="ShockAbsorber"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ShockAbsorber