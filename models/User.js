const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:['user', 'admin'],
        default: 'user'
    }
},{
    timestamps: true
})

const Users = mongoose.models.User || mongoose.model('User', userSchema)
export default Users