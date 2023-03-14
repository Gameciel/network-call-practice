import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";

import Axios from "axios";
import { API_URL } from "../fake-api/API_URL";
import SensitiveInputGroup from "./InputGroup/SensitiveInputGroup";
import NonSensitiveInputGroup from "./InputGroup/NonSensitiveInputGroup";

import { changePathName } from "../redux/actions";

export default function RegisterForm() {
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [isBusy, setBusy] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	var redirectTimeout;

	useEffect(() => {
		return () => {
			clearTimeout(redirectTimeout);
		};
	}, []);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: async values => {
			setBusy(true);
			Axios.get(`${API_URL}/user`, { params: { email: values.email } }).then(
				res => {
					if (res.data.length) {
						setErrorMessage("Email already exist!");
						setBusy(false);
					} else {
						Axios.post(`${API_URL}/user`, {
							role: "user",
							user_name: values.name,
							email: values.email.toLowerCase(),
							password: values.password,
						}).then(res => {
							setErrorMessage("");
							setSuccessMessage("Register success!, redirecting...");

							var redirectTimeout = setTimeout(() => {
								navigate("/login");
								dispatch(changePathName("login"));
							}, 4000);
						});
					}
				}
			);
		},
		validateOnChange: false,
		validateOnBlur: true,
		validationSchema: Yup.object({
			name: Yup.string()
				.min(6, "Invalid Name - minimum 6 characters")
				.required("Field can't be empty"),
			email: Yup.string()
				.email("Invalid email format")
				.required("Field can't be empty"),
			password: Yup.string()
				.matches(/[a-z]/, "at least one lowercase char")
				.matches(/[A-Z]/, "at least one uppercase char")
				.matches(/[0-9]/, "at least one number")
				.matches(
					/[@$!%*?&/.,]/,
					"at least one special char @ $ ! % * ? & / . ,"
				)
				.min(6, "Invalid Password - minimum 6 characters")
				.required("Field can't be empty"),
		}),
	});

	return (
		<div>
			{errorMessage && (
				<div class="alert alert-danger px-4 text-center" role="alert">
					Error: {errorMessage}
				</div>
			)}
			{successMessage && (
				<div class="alert alert-success px-4 text-center" role="alert">
					Success: {successMessage}
				</div>
			)}
			<form onSubmit={formik.handleSubmit} noValidate>
				<div className="mt-3 border rounded shadow-sm px-5 py-1 pb-3 d-flex flex-column flex align-items-center justify-content-center">
					<h2 className="mx-5 mt-4 mb-3">Register Form</h2>
					<div className="d-flex flex-column align-items-center justify-content-center w-100">
						<NonSensitiveInputGroup
							formik={formik}
							field={"name"}
							star={true}
							origin={"Name"}
						/>
						<NonSensitiveInputGroup
							formik={formik}
							field={"email"}
							star={true}
							origin={"Email"}
						/>
						<SensitiveInputGroup
							formik={formik}
							field={"password"}
							star={true}
							origin={"Password"}
						/>
						<div className="d-flex flex-row mt-2">
							<button
								type="submit"
								className="btn btn-primary rounded-pill border me-auto px-4 my-3"
								disabled={isBusy}
							>
								Register
							</button>
							<Link
								to="/login"
								onClick={() => {
									dispatch(changePathName("login"));
								}}
								className="btn btn-link ms-auto my-3"
							>
								Already have an account?
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
