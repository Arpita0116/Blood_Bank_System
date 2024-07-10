import React from 'react'
import { BeatLoader } from 'react-spinners'

function Spinner() {
    return (
        <div className="container" style={{ height: "100vh", width: "100%", color: "red" }}>
            <div className="row">
                <div className="col d-flex justfy-content-center align-item-center">
                    <div><BeatLoader /></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner