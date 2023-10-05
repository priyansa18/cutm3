import React from 'react'

const SkinAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humanskin.vercel.app/"
                title="Digestive"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default SkinAnatomy