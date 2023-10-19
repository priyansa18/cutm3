import React from 'react'

const V12combustion = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://v12combustion-engine.vercel.app/"
            title="V12CombustionEngine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default V12combustion