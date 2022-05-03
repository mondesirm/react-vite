import React, { useState, useEffect } from 'react';

const Posts = () => {
	const [posts, fetchPosts] = useState([]);

	const getData = () => {
	  fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((res) => {
		  fetchPosts(res)
		});
	};

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="container mx-auto mt-4">
			<h1 className="font-bold text-lg text-center my-4">{"Posts • React Vite"}</h1>

			<table className="mx-auto text-center">
				<thead>
					<tr className="font-small text-decoration-none">
						<td className="text-decoration-underline">ID</td>
						<td className="text-decoration-underline">Title</td>
						<td className="text-decoration-underline">User ID</td>
						<td className="text-decoration-underline">Body</td>
					</tr>
				</thead>
				
				<tbody>
					{posts.map((post, i) => {
						return (
							<tr key={i} className={i % 2 == 0 ? "list-group-item-secondary" : ''}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.userId}</td>
								<td>{post.body}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Posts;