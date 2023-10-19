import React from 'react'

const BlenderMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://blendermachine-zeta.vercel.app/"
            title="BlenderMachine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BlenderMachine