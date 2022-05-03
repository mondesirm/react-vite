import React from 'react';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { routes: '' };
	}

	cacheRoute(name, url) {
		history.pushState({ products: this.props.products }, name, url);
		this.setState({ routes: url });
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0" style={{ zIndex: 4 }}>
				<div className="container-fluid">
					<button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<a href="javascript:void(0)" onClick={() => this.cacheRoute('Home', '/')} className="navbar-brand mx-0 d-none d-sm-block position-absolute ms-5 mt-1 ps-3 ps-lg-0 top-0" style={{ transition: "all .2s ease" }}>
						{/* League Bet */}
						<img src="https://fakeimg.pl/600x200/FFF,00/726FFF/?text=React%20Vite&font_size=125&font=lobster" width="120" height="40" alt="logo" />
					</a>

					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ms-3 mx-sm-auto mb-2 mb-lg-0 col-12 col-lg-7 flex-sm-row justify-content-around" style={{ zIndex: 1 }}>
							<li className="nav-item d-flex">
								<a href="javascript:void(0)" onClick={() => this.cacheRoute('Users', '/users')} className="nav-link btn-outline-none text-decoration-none">
									Users
								</a>
							</li>

							<li className="nav-item d-flex">
								<a href="javascript:void(0)" onClick={() => this.cacheRoute()} className="disabled position-relative nav-link btn-outline-none text-decoration-none">
									Posts
									<span className="position-absolute start-100 translate-middle badge text-danger">Soon!</span>
								</a>
							</li>

							<li className="nav-item d-flex">
								<a href="javascript:void(0)" onClick={() => this.cacheRoute('Photos', '/photos')} className="nav-link btn-outline-none text-decoration-none">
									Photos
								</a>
							</li>

							<li className="nav-item d-flex">
								<a href="javascript:void(0)" onClick={() => this.cacheRoute()} className="disabled position-relative nav-link btn-outline-none text-decoration-none">
									Albums
									<span className="position-absolute start-100 translate-middle badge text-danger">Soon!</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;