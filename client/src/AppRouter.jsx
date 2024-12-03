import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import NotFound from './pages/NotFound';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/todo" replace />} />
			{routes.map((route, key) =>
				<Route
					key={key}
					path={route.path}
					element={<route.component />}
					exact={route.exact}
				/>
			)}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;