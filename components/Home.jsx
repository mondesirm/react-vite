import React, { Suspense, useState } from 'react';
// import Users from './Users';
// import Posts from './Posts';
// import Photos from './Photos';
// import Albums from './Albums';

const Home = () => {
	const Users = React.lazy(() => import('./Users'));
	const Photos = React.lazy(() => import('./Photos'));

	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	const [data, setData] = useState('Users');

	return (
		<div className="container mx-auto mt-4 text-center">
			<h1 className="mb-4">Count: {count}</h1>

			<div className="d-flex mt-4 justify-content-center">
				<label className="control-label mt-2 me-2" htmlFor="step">Step</label>
				<input className="form-control mb-2 w-auto" id="step" type="number" min={0} value={step} onChange={(event) => setStep(Number(event.target.value))} />
			</div>

			<div className="d-flex mt-4 justify-content-center">
				<button className="btn btn-outline-primary" onClick={() => setCount(count + step)}>Increment</button>
				<button className="btn btn-outline-dark mx-2" onClick={() => setCount(0)}>Reset</button>
				<button className="btn btn-outline-secondary" onClick={() => setCount(count - step)}>Decrement</button>
			</div>

			<div className="mt-4">
				<select name="data" id="data" onChange={(event) => setData(event.target.value)}>
					<option value="Users">Users</option>
					{/* <option value="posts">Posts</option> */}
					<option value="Photos">Photos</option>
					{/* <option value="albums">Albums</option> */}
				</select>
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				{/* Call component based on selected option */}
				{data === 'Users' && <Users />}
				{data === 'Photos' && <Photos />}
			</Suspense>
		</div>
	);
}

export default Home;