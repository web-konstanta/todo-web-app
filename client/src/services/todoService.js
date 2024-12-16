import axiosInstance from '../axiosConfig';

class TodoService {
	async todoStatuses() {
		try {
			const response = await axiosInstance.get('/todo/statuses')
			const data = response.data?.data
			return data.map(status => {
				status.value = status.id
				return status
			})
		} catch (e) {
			console.log(e)
		}
	}

	async create(data) {
		const response = await axiosInstance.post('/todo/create', data)
		return response?.status
	}

	async update(id, data) {
		const response = await axiosInstance.put(`/todo/updatee/${id}`, data)
		return response?.status
	}

	async delete(id) {
		try {
			await axiosInstance.delete(`/todo/delete/${id}`)
		} catch (e) {
			console.log(e)
		}
	}
}

export default new TodoService()