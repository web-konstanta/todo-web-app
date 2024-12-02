import Index from '../pages/Todo/Index';
import Create from '../pages/Todo/Create';

export const routes = [
	{ path: '/todo', component: Index, exact: true },
	{ path: '/todo/create', component: Create, exact: true }
]