import Index from '../pages/Todo/Index';
import Create from '../pages/Todo/Create';
import Update from '../pages/Todo/Update';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

export const routes = [
	// Auth routes
	{ path: '/sign-up', component: SignUp, exact: true },
	{ path: '/sign-in', component: SignIn, exact: true },

	// App routes
	{ path: '/todo', component: Index, exact: true },
	{ path: '/todo/create', component: Create, exact: true },
	{ path: '/todo/update/:id', component: Update, exact: true }
]