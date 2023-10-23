import React from 'react'

const Handdrill = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://handdrill.vercel.app/"
            title="Handdrill"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Handdrill