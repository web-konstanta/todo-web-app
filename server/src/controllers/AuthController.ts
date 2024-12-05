import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

class AuthController {
	async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(422).json(errors.array())
			}

			return res.json({ status: 'success' })
		} catch (e) {
			console.log(e)
		}
	}
}

export default new AuthController()