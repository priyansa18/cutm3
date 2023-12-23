import React from 'react'

const CatalyticConverter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://catalytic-converter.vercel.app/"
            title="Catalytic Converter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CatalyticConverter