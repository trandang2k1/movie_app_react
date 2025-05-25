import axios from 'axios'
import { useEffect } from 'react'

const DEFAULT_HEADERS = {
	accept: 'application/json',
	Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}

const useFetch = <T>(
	method: string,
	url: string,
	arr: (data: T[] & T) => void,
	isLoading: (loading: boolean) => void
) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				isLoading(true)
				const res = await axios({
					method: method,
					url: `${import.meta.env.VITE_API_HOST}${url}`,
					headers: {
						...DEFAULT_HEADERS,
					},
				})
				arr(
					Array.isArray(res.data.results)
						? res.data.results
						: res.data
				)
				isLoading(false)
			} catch (err) {
				console.error('Fetch error: ', err)
			}
		}
		fetchData()
	}, [url])
}

export default useFetch
