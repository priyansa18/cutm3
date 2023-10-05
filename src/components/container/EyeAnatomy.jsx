import React from 'react'

const EyeAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humaneye.vercel.app/"
                title="Eye"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default EyeAnatomy