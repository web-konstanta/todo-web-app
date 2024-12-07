import Router from 'express'
import AuthController from '../controllers/AuthController'
import TodoController from '../controllers/TodoController'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/authMiddleware'

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
router.post(
	'/sign-in',
	body('email').isEmail().withMessage('Email field is invalid'),
	body('password')
      .isLength({ min: 6, max: 30 })
		.withMessage('Password is too short or long'),
	AuthController.signIn
)

router.get('/todo', authMiddleware, TodoController.getAll)

export default router