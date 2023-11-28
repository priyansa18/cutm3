import React from 'react'

const ERTFTM = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://er-tftm.vercel.app/"
            title="ERTFTM"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ERTFTM