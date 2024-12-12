import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

export const authRoutes = [
	{ path: '/sign-up', component: SignUp, exact: true },
	{ path: '/sign-in', component: SignIn, exact: true }
]