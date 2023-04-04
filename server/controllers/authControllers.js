const JWT = require('jsonwebtoken')
const Users = require('../models/userModal')



module.exports.registerController = async (req,res) => {
    try {
        const { name, email, password } = req.body
    
        if (!name) {
          return res.send({ message: "Name is Required" });
        }
        if (!email) {
          return res.send({ message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
       
        const exisitingUser = await Users.findOne({ email });
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            sucess: false,
            message: "Email is Already Register",
          });
        }
        const user = await new Users({
          name,
          email,
          password,
        }).save();
    
        res.status(201).send({
          sucess: true,
          message: "User Register Successfully",
          user,
        });
      } catch (err) {
        console.log(err);
        res.status(500).send({
          sucess: false,
          message: "Error in Registeration",
          err
        })
      }
}

module.exports.loginController = async (req,res) =>{
    try {
        const { email, password } = req.body
    
    
        if (!email || !password) {
          return res.status(404).send({
            sucess: false,
            message: "Invalid Email or Password",
          });
        }
        const user = await Users.findOne({ email });
        if (!user) {
          return res.status(404).send({
            sucess: false,
            message: "Email Is Not Registerd",
          });
        }
        if (password !== user.password) {
          return res.status(200).send({
            sucess: false,
            message: "Invalid Password",
          });
        }
    
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        // console.log(user.cart)
        res.status(200).send({
          sucess: true,
          message: "Login Successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
    
      } catch (err) {
        console.log(err);
        res.status(500).send({
          sucess: false,
          message: "Error in Login",
          err
        })
      }
}