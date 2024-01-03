import React from 'react'

const Cannon = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cannon-nine.vercel.app/"
            title="Cannon"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Cannon