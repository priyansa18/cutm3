import React from 'react'

const Camshaft = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://camshaft.vercel.app/"
            title="Camshaft"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Camshaft