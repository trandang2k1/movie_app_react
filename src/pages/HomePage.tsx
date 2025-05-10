import { FeatureMovies, MediaList } from '../components'
import { TopRatedTabs, TrendingTabs } from '../types'

function HomePage() {
	return (
		<>
			<FeatureMovies />
			<MediaList title='Trending' tabs={TrendingTabs}/>
			<MediaList title='Top Rated' tabs={TopRatedTabs}/>
		</>
	)
}

export default HomePage
