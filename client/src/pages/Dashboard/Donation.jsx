import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import API from '../../services/API'
import moment from 'moment'

function Donation() {

    let { user } = useSelector(item => item.auth)
    let [data, setData] = useState([])
    async function getConsumerandDonationHandler() {
        let { data } = await API.post('/inventory/v1/get-consumer-donation', {
            filter: {
                donar: user?._id,
                inventoryType: "in"
            }
        })
        setData(data.details)
    }
    useEffect(() => {
        getConsumerandDonationHandler()
    }, [user])

    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>BloodGroup</th>
                                    <th scope='col'>InventoryType</th>
                                    <th scope='col'>Quantity</th>
                                    <th scope='col'>BloodGroup</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{item?.bloodGroup}</td>
                                        <td>{item?.inventoryType}</td>
                                        <td>{item?.quantity}</td>
                                        <td>{item?.email}</td>
                                        <td>{moment(item?.createdAt).startOf('hour').fromNow()}</td>

                                    </tr>
                                })}
                            </tbody>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Donation