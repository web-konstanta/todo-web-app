import HttpError from '../exceptions/httpError'
import prisma from '../lib/prisma'
import { JwtPayload, UserData } from '../types/types'
import bcrypt from 'bcrypt'
import TokenService from './TokenService'

class AuthService {
	async signUp(data: UserData) {
		try {
			const hashedPassword = await bcrypt.hash(data.password, 7)

			const user = await prisma.user.create({
				data: {
					name: data.name,
					email: data.email,
					password: hashedPassword
				}
			})
			const jwtPayload: JwtPayload = { id: user.id, email: user.email }

			return TokenService.generateAccessToken(jwtPayload)
		} catch (e) {
			console.log(e)
			throw HttpError.badRequest(500, 'Unprocessable error')
		}
	}
}

export default new AuthService()