import React from 'react'

const Molecule = () => {
    return (
        <div className='flex jus items-center'>
            <iframe
                src="https://molecule-nine.vercel.app/"
                title="Molecule"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default Molecule