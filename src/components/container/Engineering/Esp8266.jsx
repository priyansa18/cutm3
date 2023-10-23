import React from 'react'

const Esp8266 = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://esp-tau.vercel.app/"
            title="ESP8266-ESP01"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Esp8266