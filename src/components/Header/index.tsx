import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import netflixLogo from '@/assets/images/netflix.png'
import { useNavigate } from 'react-router'
import { PATH_HOME } from '@/contant'

function Header() {
	const navigate = useNavigate()
	return (
		<div className="fixed top-0 right-0 left-0 bg-slate-950 z-10">
			<div className='flex h-14 lg:h-20 justify-between items-center px-10 text-white'>
				<div className="flex items-center gap-4 lg:gap-6">
					<img onClick={() => navigate(PATH_HOME)} className="w-16 sm:w-28 cursor-pointer" src={netflixLogo} alt="" />
					<a href="#" className='lg:text-xl'>Phim</a>
					<a href="#" className='lg:text-xl'>Truyền Hình</a>
				</div>
				<div>
					<FontAwesomeIcon
						className="cursor-pointer"
						icon={faMagnifyingGlass}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
