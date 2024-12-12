import axios from 'axios';

class AuthService {
	async signUp(data) {
		try {
			const apiUrl = process.env.REACT_APP_API_URL
			const response = await axios.post(`${apiUrl}/sign-up`, data)

			const accessToken = response?.data?.token
			localStorage.setItem('accessToken', accessToken)

			return response?.data
		} catch (e) {
			console.log(e)
		}
	}

	async signIn(data) {
		try {
			const apiUrl = process.env.REACT_APP_API_URL
			const response = await axios.post(`${apiUrl}/sign-in`, data)

			const accessToken = response?.data?.token
			localStorage.setItem('accessToken', accessToken)

			return response?.data
		} catch (e) {
			console.log(e)
		}
	}
}

export default new AuthService()