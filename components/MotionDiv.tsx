'use client'

import { motion as m } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MotionDiv = ({ children }: Props) => {
	return (
		<m.div
			className='max-w-sm rounded relative w-full'
			initial={{ scale: 0, rotate: -30, opacity: 0 }}
			animate={{ scale: 1, rotate: 0, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 250,
				damping: 20,
				delay: 0.3,
				ease: 'easeInOut'
			}}
			viewport={{ amount: 0 }}
		>
			{children}
		</m.div>
	)
}

export default MotionDiv
