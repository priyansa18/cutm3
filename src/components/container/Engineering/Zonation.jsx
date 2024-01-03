import React from 'react'

const Zonation = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://zonation.vercel.app/"
            title="Zonation of fresh water"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Zonation