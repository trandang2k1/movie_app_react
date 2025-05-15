import axios from 'axios'
import { useEffect } from 'react'

const useFetch = <T>(
	method: string,
	url: string,
	arr: (data: T[] & T) => void,
	dependency?: any
) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios({
					method: method,
					url: url,
					headers: {
						accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVmNWYxMTU4YjkzOTNmYjM2YjkyNGUyZTJjZjEwMiIsIm5iZiI6MTc0NDk2NTA0Mi42NjgsInN1YiI6IjY4MDIwZGIyMmU4OTU4ZjBmOTk5NzFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQsRao0pm9YKNjGNPPYGz89Xx6Ouc8ny1AEYTGD56Kk',
					},
				})
				// .get(url, {
				// 	headers: {
				// 		accept: 'application/json',
				// 		Authorization:
				// 			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVmNWYxMTU4YjkzOTNmYjM2YjkyNGUyZTJjZjEwMiIsIm5iZiI6MTc0NDk2NTA0Mi42NjgsInN1YiI6IjY4MDIwZGIyMmU4OTU4ZjBmOTk5NzFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQsRao0pm9YKNjGNPPYGz89Xx6Ouc8ny1AEYTGD56Kk',
				// 	},
				// })
				arr(
					Array.isArray(res.data.results)
						? res.data.results
						: res.data
				)
			} catch (err) {
				console.error('Fetch error: ', err)
			}
		}
		fetchData()
	}, [url, ...dependency])
}

export default useFetch
