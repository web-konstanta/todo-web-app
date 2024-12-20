export const getTotalPages = (totalCount, limit) => {
	let totalPages = []
	for (let i = 0; i < Math.ceil(totalCount / limit); i++) {
		totalPages.push(i)
	}
	return totalPages
}