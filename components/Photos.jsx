import React, { useState, useEffect } from 'react';

const Photos = () => {
	const [photos, fetchPhotos] = useState([]);

	const getData = () => {
	  fetch('https://jsonplaceholder.typicode.com/photos')
		.then((res) => res.json())
		.then((res) => {
		  fetchPhotos(res)
		});
	};

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="container mx-auto mt-4">
			<h1 className="font-bold text-lg text-center my-4">{"Photos • React Vite"}</h1>

			<table className="text-center">
				<thead>
					<tr className="font-small text-decoration-none">
						<td className="text-decoration-underline">ID</td>
						<td className="text-decoration-underline">Title</td>
						<td className="text-decoration-underline">Album ID</td>
						<td className="text-decoration-underline">Image</td>
					</tr>
				</thead>
				
				<tbody>
					{photos.map((photo, i) => {
						return (
							<tr key={i} className={i % 2 == 0 ? "list-group-item-secondary" : ''}>
								<td>{photo.id}</td>
								<td>{photo.title}</td>
								<td>{photo.albumId}</td>
								<td>
									<a href={photo.url}>
										<img src={photo.thumbnailUrl} alt={"photo " + photo.id} />
									</a>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Photos;