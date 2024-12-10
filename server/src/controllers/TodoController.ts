import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import HttpError from '../exceptions/httpError'
import prisma from '../lib/prisma'

class TodoController {
	async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const todoList = await prisma.todo.findMany({
				select: {
					id: true,
					title: true,
					description: true,
					statusId: true,
					createdAt: true
				}
			})

			res.json({
				data: todoList,
				message: 'Todo list fetched'
			})
		} catch (e) {
			next(e)
		}
	}

	async create(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw HttpError.validationError(errors.array())
			}

			const data = req.body

			const todoStatus = await prisma.todoStatus.findFirst({
				where: {
					id: data.statusId
				}
			})

			if (!todoStatus) {
				throw HttpError.badRequest(400, 'Status id is invalid')
			}

			data.userId = req.user?.id

			const todo = await prisma.todo.create({
				data: data,
				select: {
					id: true,
					title: true,
					description: true,
					statusId: true,
					createdAt: true
				},
			})

			res.json({
				data: todo,
				message: 'New todo created'
			})
		} catch (e) {
			next(e)
		}
	}
}

export default new TodoController()