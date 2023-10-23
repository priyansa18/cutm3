import React from 'react'

const V6Engine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://v6engine.vercel.app//"
            title="V6Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default V6Engine