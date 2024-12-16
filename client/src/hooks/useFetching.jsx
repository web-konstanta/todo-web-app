import { useState } from 'react';

export const useFetch = callback => {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const fetching = async (data) => {
		try {
			setIsLoading(true)
			await callback(data)
		} catch (e) {
			setError(e?.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetching, isLoading, error]
}