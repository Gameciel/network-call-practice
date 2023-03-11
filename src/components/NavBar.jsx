import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions";

import { Link, useLocation, useParams } from "react-router-dom";

export default function NavBar() {
	const [location, setLocation] = useState(0);

	const loginSession = useSelector(state => state.loginSession);
	const dispatch = useDispatch();

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
			} else if (index > 0 && loginSession.id) {
				return;
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
					{loginSession.id ? (
						<>
							<li className="me-3 ms-0 nav-link active">
								Logged in as{" "}
								<b>
									{loginSession.user_name} ({loginSession.role})
								</b>{" "}
								<i className="bi bi-person-circle ms-1 me-3"></i> |
							</li>
							<li className="nav-item me-4">
								<button
									onClick={() => dispatch(logOut())}
									className="btn btn-link text-danger text-decoration-none fw-bold"
								>
									<i className="bi bi-reply-all-fill"></i> Logout
								</button>
							</li>
						</>
					) : null}
				</ul>
			</div>
		</nav>
	);
}
