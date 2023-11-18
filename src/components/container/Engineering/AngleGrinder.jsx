import React from 'react'

const AngleGrinder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://anglegrinder.vercel.app/"
            title="AngleGrinder"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AngleGrinder 