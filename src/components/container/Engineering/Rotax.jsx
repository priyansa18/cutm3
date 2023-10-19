import React from 'react'

const Rotax = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://rotax.vercel.app/"
            title="Rotax-582 Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Rotax