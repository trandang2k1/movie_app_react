import { FeatureMovies, Header, MediaList } from '../components'
import { TopRatedTabs, TrendingTabs } from '../types'

function HomePage() {
	return (
		<>
			<Header />
			<FeatureMovies />
			<MediaList title='Trending' tabs={TrendingTabs}/>
			<MediaList title='Top Rated' tabs={TopRatedTabs}/>
		</>
	)
}

export default HomePage
