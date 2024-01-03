import React from 'react'

const HorizontalsteamEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://horizontalsteamengine.vercel.app/"
            title="Horizontal Steam Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HorizontalsteamEngine