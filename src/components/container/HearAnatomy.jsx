import React from 'react'

const HearAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humanheart.vercel.app/"
                title="Heart"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default HearAnatomy