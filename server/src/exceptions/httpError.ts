import { ValidationError } from "express-validator"

export default class HttpError extends Error {
	status: number
	message: string
	body?: ValidationError[] | []

	constructor(status: number, message: string, body?: ValidationError[] | []) {
		super(message)
		this.status = status
		this.message = message
		this.body = body
	}

	public static validationError(body: ValidationError[]) {
		return new HttpError(422, 'Validation error', body)
	}

	public static unauthorized() {
		return new HttpError(400, 'Unauthorized')
	}

	public static badRequest(status: number, message: string, body: []) {
		return new HttpError(status, message, body)
	}
}