import React from 'react'

const MicroUSB = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://microusb.vercel.app/"
            title="MicroUSBBoard"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicroUSB