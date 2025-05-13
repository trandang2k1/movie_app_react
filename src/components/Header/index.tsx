import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import netflixLogo from '@/assets/images/netflix.png'
import { useNavigate } from 'react-router'
import { PATH_HOME } from '@/contant'

function Header() {
	const navigate = useNavigate()
	return (
		<div className="fixed top-0 right-0 left-0 z-10 bg-slate-950">
			<div className="flex h-14 items-center justify-between px-10 text-white lg:h-20">
				<div className="flex items-center gap-4 lg:gap-6">
					<img
						onClick={() => navigate(PATH_HOME)}
						className="w-16 cursor-pointer sm:w-28"
						src={netflixLogo}
						alt=""
					/>
					<a href="#" className="lg:text-xl">
						Phim
					</a>
					<a href="#" className="lg:text-xl">
						Truyền Hình
					</a>
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
