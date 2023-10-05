import React from 'react'

const ReproductiveSystem = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humanreproductive.vercel.app/"
                title="Reproductive"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default ReproductiveSystem