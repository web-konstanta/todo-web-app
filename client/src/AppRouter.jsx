import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes } from './routes/authRoutes';
import { todoRoutes } from './routes/todoRoutes';
import { useSelector } from 'react-redux';

const AppRouter = () => {
	const isAuth = useSelector(state => state.auth.isAuth)

	return (
		<Routes>
			{isAuth
				? todoRoutes.map((route, key) =>
					<Route
						key={key}
						path={route.path}
						element={<route.component />}
						exact={route.exact}
					/>
				)
				: authRoutes.map((route, key) =>
					<Route
						key={key}
						path={route.path}
						element={<route.component />}
						exact={route.exact}
					/>
				)
			}
			<Route path="*" element={<Navigate to={isAuth ? "/todo" : "/sign-in"} replace />} />
		</Routes>
	);
};

export default AppRouter;