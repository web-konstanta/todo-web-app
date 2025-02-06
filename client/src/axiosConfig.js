import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('accessToken')
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response?.status === 401) {
			// localStorage.removeItem('accessToken')
			// window.location.href = '/sign-in'
		}
		return Promise.reject(error)
	}
)

export default axiosInstance