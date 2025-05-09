import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { HomePage, MovieDetailPage } from './pages'
import { PATH_HOME, PATH_MOVIE } from './contant'
import { RootLayout } from './components'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: PATH_HOME,
				element: <HomePage />,
			},
			{
				path: PATH_MOVIE,
				element: <MovieDetailPage />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
