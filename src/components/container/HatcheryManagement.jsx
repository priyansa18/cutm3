import React from 'react'

const HatcheryManagement = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hatcherymanagement.vercel.app/"
            title="Hatchery Management"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HatcheryManagement