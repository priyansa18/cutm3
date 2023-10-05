import React from 'react'

const LiverAnatomy = () => {
  return (
    <div className="flex justify-center items-center h-screen">
         <iframe
            src="https://humanliver.vercel.app/"
            title="Liver"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LiverAnatomy