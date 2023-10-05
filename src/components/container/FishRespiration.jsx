import React from 'react'

const FishRespiration = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <iframe
      src="https://fishrespiration.vercel.app/"
      title="fishrespiration"
      style={{ width: "500px", height: "400px" }}
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"

    ></iframe>
  </div>
  )
}

export default FishRespiration