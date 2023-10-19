import React from 'react'

const DewaltWoodRouter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dewaltwoodrouter.vercel.app/"
            title="DewaltWoodRouter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DewaltWoodRouter