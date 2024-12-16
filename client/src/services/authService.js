import axios from 'axios';

class AuthService {
	async signUp(data, setIsAuth) {
		const apiUrl = process.env.REACT_APP_API_URL
		const response = await axios.post(`${apiUrl}/sign-up`, data)

		const accessToken = response?.data?.token
		localStorage.setItem('accessToken', accessToken)

		if (response?.data) setIsAuth(true)
	}

	async signIn(data, setIsAuth) {
		const apiUrl = process.env.REACT_APP_API_URL
		const response = await axios.post(`${apiUrl}/sign-in`, data)

		const accessToken = response?.data?.token
		localStorage.setItem('accessToken', accessToken)

		if (response?.data) setIsAuth(true)
	}
}

export default new AuthService()