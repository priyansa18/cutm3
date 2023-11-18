import React from 'react'

const AutomaticAirValve = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://automatic-air-valve.vercel.app/"
            title="AutomaticAirValve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AutomaticAirValve