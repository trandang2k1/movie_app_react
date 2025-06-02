import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { HomePage, MovieDetailPage, TVShowDetailPage } from './pages'
import { PATH_HOME, PATH_MOVIE, PATH_TV_SHOW } from './contant'
import { RootLayout } from './components'
import { ModalProvider } from './contexts'

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
			{
				path: PATH_TV_SHOW,
				element: <TVShowDetailPage />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ModalProvider>
			<RouterProvider router={router} />
		</ModalProvider>
	</StrictMode>
)
