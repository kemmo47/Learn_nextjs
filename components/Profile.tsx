import React from "react"

export const Profile = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-lg">
				<img
					className="w-24 h-24 rounded-full mx-auto mb-4"
					src="/kemo.jpg"
					alt="Profile Picture"
				/>
				<h2 className="text-xl font-bold mb-2">John Doe</h2>
				<p className="text-gray-600">Frontend Developer</p>
				<ul className="mt-4">
					<li>
						<strong>Email:</strong> hongocbaolong.cv@gmail.com
					</li>
					<li>
						<strong>Phone:</strong> (088) 8066-681
					</li>
					<li>
						<strong>Location:</strong> Đăk Lăk City
					</li>
				</ul>
			</div>
		</div>
	)
}
