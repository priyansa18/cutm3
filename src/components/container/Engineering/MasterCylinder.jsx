import React from 'react'

const MasterCylinder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mastercylinder.vercel.app/"
            title="Master Cylinder"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MasterCylinder