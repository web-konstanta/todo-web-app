import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import HttpError from '../exceptions/httpError'

class AuthController {
	async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw HttpError.validationError(errors.array())
			}

			return res.json({ status: 'success' })
		} catch (e) {
			next(e)
		}
	}
}

export default new AuthController()