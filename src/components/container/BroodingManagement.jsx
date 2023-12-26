import React from 'react'

const BroodingManagement = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://broodingmanagement.vercel.app/"
            title="Brooding Management"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BroodingManagement