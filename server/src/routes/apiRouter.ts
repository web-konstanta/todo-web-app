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
router.post(
	'/todo/create',
	authMiddleware,
	body('title').isLength({ min: 3, max: 25 }).withMessage('Enter title correctly'),
	body('description').isLength({ min: 3, max: 100 }).withMessage('Enter description correctly'),
	body('statusId').isInt().withMessage('Enter status id correctly'),
	TodoController.create
)
router.put(
	'/todo/update/:id',
	authMiddleware,
	body('title').isLength({ min: 3, max: 25 }).withMessage('Enter title correctly'),
	body('description').isLength({ min: 3, max: 100 }).withMessage('Enter description correctly'),
	body('statusId').isInt().withMessage('Enter status id correctly'),
	TodoController.update
)
router.delete('/todo/delete/:id', authMiddleware, TodoController.delete)

export default router