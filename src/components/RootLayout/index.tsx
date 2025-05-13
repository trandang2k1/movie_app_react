import Header from '../Header'
import { Outlet } from 'react-router'

function RootLayout() {
	return (
		<>
			<Header />
			<div className="mt-14 bg-black lg:mt-20">
				<Outlet />
			</div>
		</>
	)
}

export default RootLayout
