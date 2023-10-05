import React from 'react'

const MuscularSystem = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe
                src="https://humanmuscularsystem.vercel.app/"
                title="Muscular"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default MuscularSystem