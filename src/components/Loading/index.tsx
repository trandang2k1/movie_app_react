const Loading = () => {
	return (
		<div className="flex h-60 flex-col items-center justify-center gap-3 bg-white">
			<div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-900 border-t-slate-200"></div>
			<p>Loading...</p>
		</div>
	)
}

export default Loading
