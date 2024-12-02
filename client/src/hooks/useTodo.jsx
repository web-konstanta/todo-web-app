import { useMemo } from 'react';

export const useSortedTodos = (todos, sort) => {
	return useMemo(() => {
		if (sort) {
			return todos.sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return todos
	}, [todos, sort])
}

export const useFilteredTodos = (todos, sort, query) => {
	const sortedPosts = useSortedTodos(todos, sort)

	return useMemo(() => {
		return sortedPosts.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
	}, [todos, query, sort])
}