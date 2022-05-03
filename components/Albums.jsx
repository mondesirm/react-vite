import React, { useState, useEffect } from 'react';

const Albums = () => {
	const [albums, fetchAlbums] = useState([]);

	const getData = () => {
	  fetch('https://jsonplaceholder.typicode.com/albums')
		.then((res) => res.json())
		.then((res) => {
		  fetchAlbums(res)
		});
	};

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="container mx-auto mt-4">
			<h1 className="font-bold text-lg text-center my-4">{"Albums • React Vite"}</h1>

			<table className="mx-auto text-center">
				<thead>
					<tr className="font-small text-decoration-none">
						<td className="text-decoration-underline">ID</td>
						<td className="text-decoration-underline">Title</td>
						<td className="text-decoration-underline">User ID</td>
					</tr>
				</thead>
				
				<tbody>
					{albums.map((album, i) => {
						return (
							<tr key={i} className={i % 2 == 0 ? "list-group-item-secondary" : ''}>
								<td>{album.id}</td>
								<td>{album.title}</td>
								<td>{album.userId}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Albums;