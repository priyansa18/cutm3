import React from 'react'

const  FishFeedManufacturing= () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://fishfeedmanufacturing.vercel.app/"
            title="Process flow of fish feed manufacturing"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default FishFeedManufacturing