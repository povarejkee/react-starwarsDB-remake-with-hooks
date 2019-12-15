import React from 'react'

export default function Row(props) {
    const { leftPath, rightPath } = props

    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftPath}
            </div>
            <div className="col-md-6">
                {rightPath}
            </div>
        </div>
    )
}
