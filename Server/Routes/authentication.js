import express from 'express'
import { signUp } from '../Controllers/authentication.js'


const router = express.Router()

//Create user
router.post('/signup', signUp)

//Sign in 
router.post('/signin')

//Google Auth
router.post('/google')

export default router 