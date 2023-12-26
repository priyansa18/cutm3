import React from 'react'

const LymphaticSystem = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lymphaticsystem.vercel.app/"
            title="Lymphatic System"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LymphaticSystem