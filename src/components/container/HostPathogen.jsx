import React from 'react'

const HostPathogen = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hostpathogen.vercel.app/"
            title="Host Pathogen"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HostPathogen