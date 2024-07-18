import React, { useEffect, useState } from 'react'
import API from '../../services/API';
import moment from 'moment'

function Hospital() {
    let [data, setData] = useState([])
    async function getDonar() {
        try {
            let { data } = await API.get('/inventory/v1/get-hospital')
            setData(data.Hospitals)
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getDonar()
    }, [])
    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Phone</th>
                                    <th scope='col'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{item?.hospitalName}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.phone}</td>
                                        <td>{moment(item.createdAt).startOf('hour').fromNow()}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hospital