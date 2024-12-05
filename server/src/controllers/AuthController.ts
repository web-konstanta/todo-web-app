import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import HttpError from '../exceptions/httpError'
import AuthService from '../services/AuthService'

class AuthController {
	async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw HttpError.validationError(errors.array())
			}

			const authData = await AuthService.signUp(req.body)

			return res.json(authData)
		} catch (e) {
			next(e)
		}
	}

	async signIn(req: Request, res: Response, next: NextFunction) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw HttpError.validationError(errors.array())
			}

			const authData = await AuthService.signIn(req.body)

			res.json(authData)
		} catch (e) {
			next(e)
		}
	}
}

export default new AuthController()