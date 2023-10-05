import React from 'react'

const Twinscrew = () => {
    return (
        <div className='flex justify-center items-center'>
            <iframe
                src="https://twinscrew.vercel.app/"
                title="Twinscrew"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default Twinscrew