import React from 'react'

const Binocular = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://binocular.vercel.app/"
            title="Binocular"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Binocular