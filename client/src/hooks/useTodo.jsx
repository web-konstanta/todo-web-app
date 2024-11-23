import { useMemo } from 'react';

export const useFilteredTodos = (todos, query) => {
	return useMemo(() => {
		return todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
	}, [query])
}