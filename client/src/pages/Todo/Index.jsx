import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar';
import { useFilteredTodos } from '../../hooks/useTodo';
import TodoOptions from '../../components/Todo/TodoOptions';
import axiosInstance from '../../axiosConfig'
import Loader from '../../components/UI/Loader/Loader';
import { useFetch } from '../../hooks/useFetching';
import todoService from '../../services/todoService';
import { getTotalPages } from '../../utils/paginate';
import classes from '../../styles/modules/Todo.module.css';

const Index = () => {
	const [todos, setTodos] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [page, setPage] = useState(0)
	const [limit, setLimit] = useState(5)
	const [totalCount, setTotalCount] = useState(0)

	const [fetchPosts, isLoading, error] = useFetch(async () => {
		const response = await axiosInstance.get('/todo', {
			params: {
				pgnum: page,
				pglimit: limit
			}
		})
		setTotalCount(parseInt(response.headers['x-total-count']))
		setTodos([...response.data?.data])
	})

	useEffect(() => {
		fetchPosts()
	}, [page])

	const removeTodo = async id => {
		try {
			await todoService.delete(id)
			setTodos([...todos].filter(todo => todo.id !== id))
		} catch (e) {
			console.log(e)
		}
	}

	const filteredPosts = useFilteredTodos(todos, filter.sort, filter.query)

	const totalPages = getTotalPages(totalCount, limit)

	const changePage = page => setPage(page)

	return (
		<div>
			<Navbar />
			<TodoOptions filter={filter} setFilter={setFilter} />
			{error
				? <h1 style={{ textAlign: 'center', color: 'red', marginTop: '6%' }}>{error}</h1>
				: isLoading ? <Loader /> : <TodoList todos={filteredPosts} remove={removeTodo} />
			}
			<ul className={classes.wrapper} style={{ listStyle: 'none', display: 'flex' }}>
				{totalPages.map(page =>
					<li
						key={page}
						onClick={() => changePage(page)}
						style={{ cursor: 'pointer', marginTop: '25px', border: '1px solid black', padding: '10px' }}
					>
						{page + 1}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Index;