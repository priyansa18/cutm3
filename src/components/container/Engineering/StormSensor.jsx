import React from 'react'

const  StormSensor= () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://stormsensor.vercel.app/"
            title="ACS 712 Strom Sensor Arduino"
            className='h-screen w-full'
           // style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default StormSensor