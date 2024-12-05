import { Request, Response, NextFunction } from 'express'
import HttpError from '../exceptions/httpError'

export default function (err: any, req: Request, res: Response, next: NextFunction) {
	try {
		if (err instanceof HttpError) {
			next(res.status(err.status).json({
				message: err.message,
				body: err.body
			}))
		}

		console.log(err);
		next(res.status(500).json({
			message: 'Unprocessable error',
			body: []
		}))
	} catch (e) {
		console.log(e)
		next(e)
	}
}