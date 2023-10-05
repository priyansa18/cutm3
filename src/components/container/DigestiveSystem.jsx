import React from 'react'

const DigestiveSystem = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            <iframe
                src="https://humandigestivesystem.vercel.app/"
                title="Digestive"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default DigestiveSystem