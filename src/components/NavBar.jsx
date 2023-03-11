import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePathName, logOut } from "../redux/actions";

import { Link, useLocation, useParams } from "react-router-dom";

export default function NavBar() {
	const loginSession = useSelector(state => state.loginSession);
	const appSetting = useSelector(state => state.appSetting);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePathName(getUrlParamOnRefresh(window.location.pathname)));
	}, []);
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container-fluid d-flex flex-nowrap flex-row align-items-center justify-content-center">
				<div className="navbar-brand fw-bold ms-3 me-5">
					Network Call Practice
				</div>
				<ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center align-items-center">
					<RenderNavMenus
						dispatch={dispatch}
						appSetting={appSetting}
						isLoggedIn={Boolean(loginSession.id)}
					/>
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
							<li className="nav-item me-4 ms-2">
								<button
									onClick={() => dispatch(logOut())}
									className="btn btn-warning text-link text-decoration-none fw-bold"
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

const RenderNavMenus = props => {
	const navs = ["Users", "Register", "Login"];

	return navs.map((value, index) => {
		if (value.toLowerCase() === props.appSetting.pathName) {
			return (
				<li className="nav-item me-3">
					<Link
						className="nav-link active"
						aria-current="page"
						onClick={() =>
							props.dispatch(changePathName(`${value.toLowerCase()}`))
						}
					>
						{value}
					</Link>
				</li>
			);
		} else if (index > 0 && props.isLoggedIn) {
			return;
		} else {
			return (
				<li className="nav-item me-3">
					<Link
						className="nav-link"
						to={`/network-call-practice/${value.toLowerCase()}`}
						onClick={() =>
							props.dispatch(changePathName(`${value.toLowerCase()}`))
						}
					>
						{value}
					</Link>
				</li>
			);
		}
	});
};

const getUrlParamOnRefresh = url => {
	return url.substring(23);
};
