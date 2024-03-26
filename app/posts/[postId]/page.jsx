import React from 'react'

const page = ({ params }) => {
    return (
        <div>{params.postId}</div>
    )
}

export default page