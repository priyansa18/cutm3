import React from 'react'

const WifiSwitchRelay = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://wifiswitchrelay.vercel.app/"
            title="Wifi Switch Relay"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WifiSwitchRelay