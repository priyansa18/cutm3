import React from 'react'

const Freezer = () => {
    return (
        <div className='flex justify-center items-center'>
            <iframe
                src="https://continousfreezer.vercel.app/"
                title="Continous Freezer"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default Freezer