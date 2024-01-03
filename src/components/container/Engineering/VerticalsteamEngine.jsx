import React from 'react'

const VerticalsteamEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://verticalsteamengine.vercel.app/"
            title="Vertical Steam Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default VerticalsteamEngine