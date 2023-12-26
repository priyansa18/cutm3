import React from 'react'

const Palemon = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://palemonstructureanalysis.vercel.app/"
            title="Palemon"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Palemon