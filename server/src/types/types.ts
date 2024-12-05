export type UserData = {
	name: string,
	email: string,
	password: string
}

export type JwtPayload = Pick<UserData, 'email'> & {
	id: number
}