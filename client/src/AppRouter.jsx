import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import NotFound from './components/UI/NotFound/NotFound';

const AppRouter = () => {
	return (
		<Routes>
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