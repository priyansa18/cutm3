import React from 'react'

const CellAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            <iframe
                src="https://humancell.vercel.app/"
                title="Cell"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default CellAnatomy