import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function NavBar() {
	const [location, setLocation] = useState(0);

	const RenderNavMenus = () => {
		const navs = ["Users", "Register", "Login"];

		return navs.map((value, index) => {
			if (window.location.pathname.substr(1) === value.toLowerCase()) {
				setLocation(index);
			}
			if (location === index) {
				return (
					<li className="nav-item me-3">
						<Link
							className="nav-link active"
							aria-current="page"
							onClick={() => setLocation(index)}
						>
							{value}
						</Link>
					</li>
				);
			} else {
				return (
					<li className="nav-item me-3">
						<Link
							className="nav-link"
							to={`/${value.toLowerCase()}`}
							onClick={() => setLocation(index)}
						>
							{value}
						</Link>
					</li>
				);
			}
		});
	};

	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container-fluid d-flex flex-nowrap flex-row align-items-center justify-content-center">
				<div className="navbar-brand fw-bold ms-3 me-5">
					Network Call Practice
				</div>
				<ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center align-items-center">
					<RenderNavMenus />
				</ul>
				<ul className="navbar-nav d-flex flex-row justify-content-center align-items-center ms-auto">
					<li className="me-3 ms-0 nav-link active">
						Logged in as <b>user_name</b>{" "}
						<i className="bi bi-person-circle ms-1 me-3"></i> |
					</li>
					<li className="nav-item me-4">
						<a className="nav-link active" aria-current="page" href="#">
							Logout
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
