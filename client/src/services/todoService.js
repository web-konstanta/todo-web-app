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
		try {
			const response = await axiosInstance.post('/todo/create', data)
			if (response?.status === 201) {
				window.location.href = '/todo'
			}
		} catch (e) {
			console.log(e)
		}
	}

	async delete(id) {
		try {
			const response = await axiosInstance.delete(`/todo/delete/${id}`)
			console.log(response.data?.data)
		} catch (e) {
			console.log(e)
		}
	}
}

export default new TodoService()