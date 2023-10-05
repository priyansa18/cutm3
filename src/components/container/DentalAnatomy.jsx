import React from 'react'

const DentalAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humandental.vercel.app/"
                title="Dental"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default DentalAnatomy