import nextConnect from 'next-connect';
import jwt from 'jsonwebtoken'

export default nextConnect({
    onError(error, req, res) {
        return res.status(501).json({ error: `sorry something went wrong ${error.message}` })
    },
    onNoMatch(req, res) {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
    }
}).use((req,res,next)=>{
    const { authorization } = req.headers
    // console.log('authorization')
    if (authorization) {
        const token = authorization
        //@ts-ignore
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
               return res.status(401).send({ message: 'Login is required!' })
            } else {
                //@ts-ignore
                req.user = decode
                next()
            }
        })
    } else {
        res.status(401).send({ message: 'Token not supplied, Try loggin in' })
        next()
    }
})