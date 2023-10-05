import React from 'react'

const Grasshopper = () => {
  return (
    <div className='flex justify-center items-center h-screen' >
    <iframe
      src="https://grasshopper-kappa.vercel.app/"
      title="Grasshopper"
      style={{ width: "500px", height: "400px" }}
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"

    ></iframe>
  </div>
  )
}

export default Grasshopper