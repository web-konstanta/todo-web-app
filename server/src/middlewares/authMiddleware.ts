import { NextFunction, Request, Response } from 'express'
import HttpError from '../exceptions/httpError'
import TokenService from '../services/TokenService'

export default function (req: Request, res: Response, next: NextFunction) {
	try {
		let accessToken = req.headers.authorization
		if (! accessToken) {
			throw HttpError.unauthorized()
		}

		accessToken = accessToken.split(' ')[1]

		const userData = TokenService.verifyAccessToken(accessToken)
		
		if (!userData) {
			throw HttpError.unauthorized()
		}

		req.user = userData
		
		next()
	} catch (e) {
		next(e)
	}
}