import Router from 'express'
import AuthController from '../controllers/AuthController'
import { body } from 'express-validator'

const router = Router()

router.post(
	'/sign-up',
	body('name').isLength({ min: 2, max: 20 }).withMessage('Enter name field correctly'),
	body('email').isEmail().withMessage('Email field is invalid'),
	body('password')
      .isLength({ min: 6, max: 30 })
      .withMessage('Password is too short or long'),
	AuthController.signUp
)

export default router