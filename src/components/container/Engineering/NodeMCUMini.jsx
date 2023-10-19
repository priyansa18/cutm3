import React from 'react'

const NodeMCUMini = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://node-mcu-mini.vercel.app/"
            title="NodeMCUMini"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default NodeMCUMini