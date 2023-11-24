import React from 'react'

const Drumbreak = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://drumbreak.vercel.app/"
            title="Drum break"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Drumbreak