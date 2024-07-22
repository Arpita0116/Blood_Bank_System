import React, { useEffect, useState } from 'react'
import API from '../../../services/API'
import { toast } from 'react-toastify'
import moment from 'moment'

function GetDonarList() {
    let [data, setData] = useState([])
    async function getDonar() {
        try {
            let { data } = await API.get("/admin/v1/get-donar-list")
            setData(data.donars)
        }
        catch (e) {
            console.log(e)
        }
    }

    async function deleteHandler(id) {
        try {
            let { data } = await API.delete(`/admin/v1/admin-delete/${id}`)
            if (data.success) {
                toast.success("data deleted successfully")
                window.location.reload()
            }
            else {
                toast.danger("something worng")
                window.location.reload()
            }
        }
        catch (e) {
            console.log("something wrong");
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
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 &&
                                    data.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item?.name || item?.organizatioName + "(ORG)"}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.phone}</td>
                                                <td>{moment(item?.createdAt).startOf("hour").fromNow()}</td>
                                                <td>
                                                    <button className='btn btn-primary'>
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        deleteHandler(item.id)
                                                    }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetDonarList