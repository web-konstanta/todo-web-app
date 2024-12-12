import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import HttpError from '../exceptions/httpError'
import prisma from '../lib/prisma'

class TodoController {
	async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { pgnum, pglimit } = req.query

			const pageNumber = parseInt(pgnum as string, 10) || 0
			const pageLimit = parseInt(pglimit as string, 10) || 10

			const todoList = await prisma.todo.findMany({
				skip: pageNumber * pageLimit,
				take: pageLimit,
				where: {
					userId: req.user?.id
				},
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
				}
			})

			res.status(201).json({
				data: todo,
				message: 'New todo created'
			})
		} catch (e) {
			next(e)
		}
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				throw HttpError.validationError(errors.array())
			}

			const { id: todoId } = req.params
			const data = req.body

			const todoStatus = await prisma.todoStatus.findFirst({
				where: {
					id: data.statusId
				}
			})

			if (!todoStatus) {
				throw HttpError.badRequest(400, 'Status id is invalid')
			}

			const todo = await prisma.todo.findFirst({
				where: {
					id: parseInt(todoId)
				}
			})

			if (!todo) {
				throw HttpError.badRequest(400, 'Todo id is invalid')
			}

			const updatedTodo = await prisma.todo.update({
				where: {
					id: parseInt(todoId)
				},
				data: data,
				select: {
					id: true,
					title: true,
					description: true,
					statusId: true,
					createdAt: true
				}
			})

			res.json({
				data: updatedTodo,
				message: `Todo with id ${todoId} updated successfully`
			})
		} catch (e) {
			next(e)
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { id: todoId } = req.params

			await prisma.todo.delete({
				where: {
					id: parseInt(todoId)
				}
			})

			res.json({
				data: [],
				message: `Todo with id ${todoId} deleted successfully`
			})
		} catch (e) {
			next(e)
		}
	}
}

export default new TodoController()