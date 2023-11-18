import React from 'react'

const RefrigiratorValve = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://refrigirator-valve.vercel.app/"
            title="Refrigirator Valve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RefrigiratorValve