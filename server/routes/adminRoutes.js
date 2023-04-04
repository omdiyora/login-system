const express = require('express');

const authControllers = require('../controllers/authControllers')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.post('/register', authControllers.registerController)

router.post('/login', authControllers.loginController)

router.get('/admin-auth', authMiddleware.requireSignIn, authMiddleware.isAdmin
    , (req, res) => {
        res.status(200).send({ ok: true })
    }
)



module.exports = router


// http://localhost:4002/api/auth/login