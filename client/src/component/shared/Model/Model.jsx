import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputType from '../Form/InputType'
import API from '../../../services/API'
import { toast } from 'react-toastify'

function Model() {
    let { user } = useSelector(item => item.auth)
    let [inventoryType, setInventoryType] = useState('in')
    let [email, setEmail] = useState('')
    let [quantity, setQuantity] = useState(0)
    let [bloodTyppe, setBloodType] = useState('')

    async function createModelHandler() {
        try {
            if (!bloodTyppe || !quantity)
                return TransformStream.error('All filed are Requried')
            let { data } = await API.post('/inventory/v1/create-inventory', {
                email,
                inventoryType,
                organization: user?._id,
                quantity,
                bloodGroup: bloodTyppe
            })
            if (data.success) {
                toast.success(data.message)
                window.location.reload()
            }
        }
        catch (e) {
            console.log(e);
            toast.error(e.response.data.message)
        }
    }
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Create Inventory</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body">
                            {/* inventor-type */}
                            <div className='inventory-type d-flex'>
                                <div className='form-check'>
                                    <input className='form-check-input' type='radio' name='flexRadioDefault2' defaultChecked value='in' onChange={(e) => { setInventoryType(e.target.value) }} />
                                    <label className='form-check-label' htmlFor='flexRadioDefault2'>IN</label>
                                </div>

                                {/* &nbsp */}
                                <div className='form-check ms-3'>
                                    <input className='form-check-input' type='radio' name='flexRadioDefault3' value="out" onChange={(e) => { setInventoryType(e.target.value) }} />
                                    <label className='form-check-label' htmlFor='flexRadioDefault3'>OUT</label>
                                </div>
                            </div>
                            <br />

                            {/* For email */}
                            <InputType lableFor="email" lableText="Email" inputType="email" value="email" onChange={(e) => { setEmail(e.target.value) }} name="email" />

                            {/* For Quantity */}
                            <br />
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setBloodType(e.target.value) }}>
                                <option selected>Select Type</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            <br />
                            <InputType lableFor="quantity" lableText="Quantity" inputType="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} name="quantity" />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={createModelHandler}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model