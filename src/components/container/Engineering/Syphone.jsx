import React from 'react'

const Syphone = () => {
    return (
        <div className='flex justify-center items-center'>
            <iframe
                src="https://syphone.vercel.app/"
                title="Syphone"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default Syphone