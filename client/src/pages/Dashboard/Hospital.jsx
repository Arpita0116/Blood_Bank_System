import React, { useState } from 'react'
import API from '../../services/API';

function Hospital() {
    let [data, setData] = useState([])
    async function getDonar() {
        try {
            let { data } = await API.get('/inventory/v1/get-hospital')
            setData(data)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>Hospital</div>
    )
}

export default Hospital