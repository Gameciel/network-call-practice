import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changePathName } from "../redux/actions";

export default function Redirect() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePathName("users"));
		navigate("/users");
	}, []);

	return;
}
