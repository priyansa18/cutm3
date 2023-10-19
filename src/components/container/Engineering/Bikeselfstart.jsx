import React from 'react'

const Bikeselfstart = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bikeselfstartmotor-pi.vercel.app/"
            title="BikeSelfStart"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Bikeselfstart