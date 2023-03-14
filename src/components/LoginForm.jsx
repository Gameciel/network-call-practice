import React, { useState } from "react";

import NonSensitiveInputGroup from "./InputGroup/NonSensitiveInputGroup";
import SensitiveInputGroup from "./InputGroup/SensitiveInputGroup";

import { useDispatch } from "react-redux";
import { userLogin, changePathName } from "../redux/actions";

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import Axios from "axios";
import { API_URL } from "../fake-api/API_URL";

export default function LoginForm(props) {
	const dispatch = useDispatch();

	const [errorMessage, setErrorMessage] = useState("");
	const [isBusy, setBusy] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async values => {
			setBusy(true);
			Axios.get(`${API_URL}/user`, {
				params: {
					email: values.email.toLowerCase(),
				},
			})
				.then(res => {
					const isEmailCorrect = Boolean(res.data[0]);

					if (isEmailCorrect) {
						const isPasswordCorrect = res.data[0].password === values.password;

						if (isPasswordCorrect) {
							dispatch(userLogin(res.data[0]));
						} else {
							setErrorMessage("Wrong password!");
						}
					} else {
						setErrorMessage("Email is not registered!");
					}
				})
				.catch(err => console.error(err))
				.finally(() => {
					setBusy(false);
				});
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email format")
				.required("Field can't be empty"),
			password: Yup.string()
				.min(6, "Minimum 6 characters")
				.required("Field can't be empty"),
		}),
		validateOnBlur: true,
		validateOnChange: false,
	});

	return (
		<div className="d-flex flex-column justify-content-center ">
			{errorMessage && (
				<div class="alert alert-danger px-4 text-center" role="alert">
					Error: {errorMessage}
				</div>
			)}

			<form onSubmit={formik.handleSubmit} noValidate>
				<div className="mt-3 border rounded shadow-sm px-5 py-1 pb-3 d-flex flex-column flex align-items-center justify-content-center">
					<h2 className="mx-5 mt-4 mb-3">Login Form</h2>

					<div className="d-flex flex-column align-items-center justify-content-center w-100">
						<NonSensitiveInputGroup
							formik={formik}
							field={"email"}
							origin={"Email"}
						/>
						<SensitiveInputGroup
							formik={formik}
							field={"password"}
							origin={"Password"}
						/>
						<div className="d-flex flex-row mt-2">
							<button
								type="submit"
								className="btn btn-primary rounded-pill border me-auto px-4 my-3"
								disabled={isBusy}
							>
								Login
							</button>
							<Link
								to="/register"
								onClick={() => dispatch(changePathName("register"))}
								className="btn btn-link ms-auto my-3"
							>
								Don't have an account?
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
