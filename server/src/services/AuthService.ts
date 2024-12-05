import HttpError from '../exceptions/httpError'
import prisma from '../lib/prisma'
import { JwtPayload, UserData } from '../types/types'
import bcrypt from 'bcrypt'
import TokenService from './TokenService'

class AuthService {
	async signUp(data: UserData) {
		const candidate = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})

		if (candidate) {
			throw HttpError.badRequest(400, 'Email is already taken')
		}

		const hashedPassword = await bcrypt.hash(data.password, 7)

		const user = await prisma.user.create({
			data: {
				name: data.name!,
				email: data.email,
				password: hashedPassword
			}
		})
		const jwtPayload: JwtPayload = { id: user.id, email: user.email }

		return TokenService.generateAccessToken(jwtPayload)
	}

	async signIn(data: UserData) {
		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})

		if (! user) {
			throw HttpError.badRequest(400, 'Email is invalid')
		}

		if (! await bcrypt.compare(data.password, user.password)) {
			throw HttpError.badRequest(400, 'Password is invalid')
		}

		const jwtPayload: JwtPayload = { id: user.id, email: user.email }

		return TokenService.generateAccessToken(jwtPayload)
	}
}

export default new AuthService()