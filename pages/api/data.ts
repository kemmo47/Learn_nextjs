import type { NextApiResponse } from 'next'

export default function handler(res: NextApiResponse) {
	const data = [
		{ name: 'John', age: 25, id: 1 },
		{ name: 'Jane', age: 30, id: 2 },
		{ name: 'Bob', age: 35, id: 3 },
	]

	const additionalData = [
		{ name: 'Alice', age: 28, id: 4 },
		{ name: 'David', age: 32, id: 5 },
		{ name: 'Sarah', age: 27, id: 6 },
		{ name: 'Michael', age: 40, id: 7 },
		{ name: 'Emily', age: 22, id: 8 },
		{ name: 'Daniel', age: 29, id: 9 },
		{ name: 'Olivia', age: 31, id: 10 },
		{ name: 'Matthew', age: 36, id: 11 },
		{ name: 'Sophia', age: 26, id: 12 },
		{ name: 'James', age: 33, id: 13 },
	]

	const dataWithAdditional = [...data, ...additionalData]

	res.status(200).json({ data: dataWithAdditional })

	res.status(200).json({ data })
}
