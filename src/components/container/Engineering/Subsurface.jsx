import React from 'react'

const Subsurface = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://subsurface.vercel.app/"
            title="Subsurface Drainage System"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Subsurface