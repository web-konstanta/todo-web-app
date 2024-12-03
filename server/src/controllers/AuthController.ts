import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

class AuthController {
	async signUp(req: Request, res: Response): Promise<any> {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(422).json(errors)
		}

		return res.json({ status: 'success' })
	}
}

export default new AuthController()