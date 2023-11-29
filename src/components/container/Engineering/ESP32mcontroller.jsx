import React from 'react'

const ESP32mcontroller = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://esp32mcrontroller.vercel.app/"
            title="ESP32 microcontroller"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ESP32mcontroller