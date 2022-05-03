import React, { useState, useEffect } from 'react';

const Users = () => {
	const [users, fetchUsers] = useState([]);

	const getData = () => {
	  fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((res) => {
		  fetchUsers(res)
		});
	};

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="container mx-auto mt-4">
			<h1 className="font-bold text-lg text-center my-4">{"Users • React Vite"}</h1>

			<table className="text-center">
				<thead>
					<tr className="font-small text-decoration-none">
						<td className="text-decoration-underline">ID</td>
						<td className="text-decoration-underline">Name</td>
						<td className="text-decoration-underline">Email</td>
						<td className="text-decoration-underline">Phone</td>
						<td className="text-decoration-underline">Website</td>
						<td className="text-decoration-underline">Address</td>
						<td className="text-decoration-underline">Company</td>
					</tr>
				</thead>
				
				<tbody>
					{users.map((user, i) => {
						return (
							<tr key={i} className={i % 2 == 0 ? "list-group-item-secondary" : ''}>
								<td>{user.id}</td>
								<td>{user.name} ({user.username})</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.website}</td>
								<td>{user.address.street}, {user.address.zipcode} {user.address.city}</td>
								<td>{user.company.name}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Users;