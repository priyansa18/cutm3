import React from 'react'

const Greenhouse = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://greenhouse-eta.vercel.app/"
            title="Green house"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Greenhouse