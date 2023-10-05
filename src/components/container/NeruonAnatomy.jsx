import React from 'react'

const NeruonAnatomy = () => {
    return (
        <div className="flex justify-start items-center h-screen">
            <iframe
                src="https://humanneuralsystem.vercel.app/"
                title="Neural"
                style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default NeruonAnatomy