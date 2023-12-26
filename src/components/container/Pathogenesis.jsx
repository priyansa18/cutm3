import React from 'react'

const Pathogenesis = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pathogenesis.vercel.app/"
            title="Pathogenesis"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Pathogenesis