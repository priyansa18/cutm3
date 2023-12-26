import React from 'react'

const SkeletalSystem = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://skeletalsystem.vercel.app/"
            title="Skeletal System"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SkeletalSystem