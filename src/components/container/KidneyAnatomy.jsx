import React from 'react'

const KidneyAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humankidney.vercel.app/"
                title="Kidney"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default KidneyAnatomy