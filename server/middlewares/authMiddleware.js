const JWT = require('jsonwebtoken')
const userModal = require('../models/userModal');

module.exports.requireSignIn = (req,res,next) =>{
    try {
        const decode = JWT.verify(req.headers.authorization , process.env.JWT_SECRET )
        req.user = decode
        next();
    } catch (err) {
        console.log(err);
    }
}

module.exports.isAdmin = async (req,res,next) =>{
        console.log("Admin");
    try {
        const user = await userModal.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success:false,
                messsage:"UnAuthorized Access"
            })
        }else {
            next();
        }
    } catch (err) {
        res.status(401).send({
            success: false,
            err,
            message: "Error in admin middelware",
          });
    }
}