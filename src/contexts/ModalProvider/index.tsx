import React, { createContext, useContext, useEffect, useState } from 'react'

interface Props {
	children: React.ReactNode
}

interface ModalContextType {
	setIsShowing: React.Dispatch<React.SetStateAction<boolean>>
	setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModalContext = () => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModalContext must be used within a ModalProvider')
	}
	return context
}

function ModalProvider({ children }: Props) {
	const [isShowing, setIsShowing] = useState(false)
	const [content, setContent] = useState<React.ReactNode>()

	useEffect(() => {
		document.body.style.overflow = isShowing ? 'hidden' : 'scroll'
	}, [isShowing])

	return (
		<ModalContext.Provider value={{ setIsShowing, setContent }}>
			{children}
			{isShowing && (
				<div className="fixed inset-0 z-2">
					<div
						className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
						onClick={() => setIsShowing(false)}
					>
						{content}
					</div>
				</div>
			)}
		</ModalContext.Provider>
	)
}

export default ModalProvider
