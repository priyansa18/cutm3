import React from 'react'

const Sonoff = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sonoff7-32vwifi.vercel.app/"
            title="Sonoff 7-32 Wifi"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Sonoff