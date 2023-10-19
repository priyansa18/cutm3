import React from 'react'

const CordlessDrillMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cordlessdrillmachine.vercel.app/"
            title="DewaltWoodRouter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CordlessDrillMachine