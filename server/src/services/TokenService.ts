import { JwtPayload } from '../types/types'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

class TokenService {
	verifyAccessToken(token: string): JwtPayload | null {
		try {
			return jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY!) as JwtPayload
		} catch (e) {
			return null
		}
	}

	generateAccessToken(jwtPayload: JwtPayload): object {
		const accessToken = jwt.sign(jwtPayload, process.env.JWT_ACCESS_SECRET_KEY!, { expiresIn: '1h' })

		return {
			data: jwtPayload,
			token: accessToken
		}
	}
}

export default new TokenService