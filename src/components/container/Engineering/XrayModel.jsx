import React from 'react'

const XrayModel = () => {
  return (
    <div className='flex justify-center items-center '>
        <iframe
            src="https://xraymachine.vercel.app/"
            title="X-Ray Machine"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default XrayModel