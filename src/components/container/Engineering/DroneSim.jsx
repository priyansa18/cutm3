import React from 'react'

const DroneSim = () => {
    return (
        <div className='flex justify-center items-center'>

            <iframe
                src="https://dronesimulator.vercel.app/"
                title="Drone Simulator"
                className='h-screen w-full'
                //style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default DroneSim