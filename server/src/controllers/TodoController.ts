import { NextFunction, Request, Response } from 'express'

class TodoController {
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			console.log(req.user)
			res.json({ message: 'Todo list fetched' })
		} catch (e) {
			next(e)
		}
	}
}

export default new TodoController()