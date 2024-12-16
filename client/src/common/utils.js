export const formatDate = isoDate => {
	const date = new Date(isoDate)

	const day = date.getUTCDate().toString().padStart(2, '0')
	const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
	const year = date.getUTCFullYear()

	const hours = date.getUTCHours().toString().padStart(2, '0')
	const minutes = date.getUTCMinutes().toString().padStart(2, '0')
	const seconds = date.getUTCSeconds().toString().padStart(2, '0')

	return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}