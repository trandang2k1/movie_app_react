import axios from 'axios'
import { useEffect, useState } from 'react'

const DEFAULT_HEADERS = {
	accept: 'application/json',
	Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}

const useFetch = <T>(method: string, url: string) => {
	const [data, setData] = useState<T>()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const res = await axios({
					method: method,
					url: `${import.meta.env.VITE_API_HOST}${url}`,
					headers: {
						...DEFAULT_HEADERS,
					},
				})
				const resultData = Array.isArray(res.data.results)
					? res.data.results
					: res.data
				setData(resultData)
			} catch (err) {
				console.error('Fetch error: ', err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [url, method])
	return { data, isLoading }
}

export default useFetch
