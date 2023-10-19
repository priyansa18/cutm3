import React from 'react'

const SingleCylinder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://singlecycleengine.vercel.app/"
            title="SingleCylinder"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SingleCylinder