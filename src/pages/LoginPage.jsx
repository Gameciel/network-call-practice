import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { changePathName } from "../redux/actions";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	const loginSession = useSelector(state => state.loginSession);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			clearTimeout(redirectTimeout);
		};
	}, []);

	if (loginSession.id) {
		var redirectTimeout = setTimeout(() => {
			navigate("/users");
			dispatch(changePathName("users"));
		}, 4000);
		return (
			<div className="alert alert-success px-4 text-center" role="alert">
				You are logged in as {loginSession.user_name}, redirecting...
			</div>
		);
	} else return <LoginForm />;
}
