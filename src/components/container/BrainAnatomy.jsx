import React from 'react'

const BrainAnatomy = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://brain-anatomy.vercel.app/"
            title="Human Brain Anatomy"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BrainAnatomy