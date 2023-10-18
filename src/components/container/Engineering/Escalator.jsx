import React from 'react'

const Escalator = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://camera-three-sigma.vercel.app/"
            title="Escalator"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Escalator