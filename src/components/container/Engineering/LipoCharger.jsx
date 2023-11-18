import React from 'react'

const LipoCharger= () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lipo-charger.vercel.app/"
            title="LipoCharger"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LipoCharger