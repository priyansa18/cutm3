import React from 'react'

const Hobbywing = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hobbywing.vercel.app/"
            title="Hobbywing X-rotor F4 Flight Controller"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Hobbywing 