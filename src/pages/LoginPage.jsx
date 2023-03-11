import React from "react";

import { useDispatch } from "react-redux";
import { changePathName } from "../redux/actions";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	const loginSession = useSelector(state => state.loginSession);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	if (loginSession.id) {
		setTimeout(() => {
			navigate("/users");
			dispatch(changePathName("users"));
		}, 4000);
		return (
			<div class="alert alert-success px-4 text-center" role="alert">
				You are logged in as {loginSession.user_name}, redirecting...
			</div>
		);
	} else return <LoginForm />;
}
