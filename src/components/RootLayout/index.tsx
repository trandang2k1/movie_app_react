import Header from '../Header'
import { Outlet } from 'react-router'

function RootLayout() {
	return (
		<>
			<Header />
			<div className='bg-black mt-14 lg:mt-20'>
				<Outlet />
			</div>
		</>
	)
}

export default RootLayout
