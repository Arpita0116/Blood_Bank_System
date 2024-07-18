import React, { useEffect, useState } from 'react'
import moment from 'moment'
import API from '../../services/API'
import { useSelector } from 'react-redux'


function Organization() {
    let { user } = useSelector(item => item.auth)
    let [data, setDate] = useState([])

    async function getOrg() {
        try {
            if (user.role == "hospital") {
                let { data } = await API.get('/inventory/v1/get-org-hospital')
                setDate(data.organization)
            }
            if (user.role == "donar") {
                let { data } = await API.get('/inventory/v1/get-org-doner')
                setDate(data.organization)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getOrg()
    })
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
                                    <th colSpan="2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{item?.organizationName}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.phone}</td>
                                        <td>{moment(item?.createdAt).startOf('hour').fromNow()}</td>
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

export default Organization