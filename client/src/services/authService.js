import axios from 'axios';

class AuthService {
	async signUp(data) {
		const apiUrl = process.env.REACT_APP_API_URL
		const response = await axios.post(`${apiUrl}/sign-up`, data)

		const accessToken = response?.data?.token
		localStorage.setItem('accessToken', accessToken)

		return response
	}

	async signIn(data) {
		const apiUrl = process.env.REACT_APP_API_URL
		const response = await axios.post(`${apiUrl}/sign-in`, data)

		const accessToken = response?.data?.token
		localStorage.setItem('accessToken', accessToken)

		return response
	}
}

export default new AuthService()