let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is Required *'],
        enum: ['donar', 'admin', 'organization', 'hospital']
    },
    name: {
        type: String,
        required: function () {
            if (this.role == 'donar' || this.role == 'admin') {
                return true
            }
            else {
                return false
            }
        }
    },

    email: {
        type: String,
        required: [true, 'Email is Required *'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required *'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is Required *'],
    },
    address: {
        type: String,
        required: [true, 'Address is Required'],
    },
    organizationName: {
        type: String,
        required: function () {
            if (this.role == 'organization') {
                return true
            }
            else {
                return false
            }
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role == 'hospital') {
                return true
            }
            else {
                return false
            }
        }
    }
}, { timestamps: true })
module.exports = mongoose.model('users', userSchema)