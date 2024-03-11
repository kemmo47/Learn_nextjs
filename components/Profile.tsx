import { useRouter } from 'next/router'
import React from 'react'

import { useAuthContext } from './AuthContext'

export const Profile = () => {
	const user = useAuthContext()
	const router = useRouter()

	React.useEffect(() => {
		if (user == null) router.push('/')
	}, [user])

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-lg">
				<img
					className="w-24 h-24 rounded-full mx-auto mb-4"
					src="/kemo.jpg"
					alt="Profile Picture"
				/>
				<h2 className="text-xl font-bold mb-2">Hồ Ngọc Bảo Long</h2>
				<p className="text-gray-600">Frontend Developer</p>
				<ul className="mt-4">
					<li>
						<strong>Email:</strong> hongocbaolong.**@gmail.com
					</li>
					<li>
						<strong>Phone:</strong> (088) 8066-6**
					</li>
					<li>
						<strong>Location:</strong> Đăk Lăk City
					</li>
				</ul>
			</div>
		</div>
	)
}
