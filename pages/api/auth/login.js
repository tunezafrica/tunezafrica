import nc from 'next-connect'
import Users from '../../../models/User'
const handler = nc()
import { connect, disconnect } from '../../../utils/mongo'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// login user
// login user
// /api/auth/login
handler.post(async (req, res) => {
    await connect()
    const { email, password } = req.body
    const _user = await Users.findOne({ email: email })

    if(!_user){
        res.status(404).send({message: 'Account does not exist!'})
    }

    await disconnect()
    if (_user && bcrypt.compareSync(password, _user.password)) {
        const token = jwt.sign({
            _id: _user._id,
            email: _user.email,
            role: _user.role,
            name: _user.name
            // @ts-ignore
        }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })
        res.send({
            token,
            _id: _user._id,
            email: _user.email,
            role: _user.role,
            name: _user.name
        })
    } else {
        res.status(401).send('Invalid email or password')
    }

})

export default handler