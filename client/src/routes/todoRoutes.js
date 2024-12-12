import Index from '../pages/Todo/Index';
import Create from '../pages/Todo/Create';
import Update from '../pages/Todo/Update';

export const todoRoutes = [
	{ path: '/todo', component: Index, exact: true },
	{ path: '/todo/create', component: Create, exact: true },
	{ path: '/todo/update/:id', component: Update, exact: true }
]