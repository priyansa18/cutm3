import React from 'react'

const RollerConveyor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://rollerconveyor.vercel.app/"
            title="Roller Conveyor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RollerConveyor