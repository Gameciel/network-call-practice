import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function FormikLoginPage() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: values => {
			console.log(values);
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Input format email yang tepat"),

			password: Yup.string().min(6, "Minimal 6 karakter password"),
		}),
	});

	console.log(formik);
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="mt-5 border rounded shadow-sm px-5 py-1 pb-3 d-flex flex-column flex align-items-center justify-content-center">
				<h2 className="mx-5 mt-4">Login Form</h2>

				<div className="d-flex flex-column align-items-center justify-content-center w-100">
					<div className="align-self-start me-auto pt-1 mb-1">
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-group flex-nowrap mb-4">
						<div className="input-group d-flex flex-column">
							<input
								type="email"
								id="email"
								className="form-control w-100 rounded"
								name="email"
								placeholder="Email"
								aria-label="Register_Email"
								aria-describedby="button-addon2"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
							{formik.errors.email && (
								<div
									className="text-danger ms-1 position-absolute"
									style={{ bottom: "-1.45em" }}
								>
									<i className="bi bi-exclamation-triangle me-1"></i>
									<small>{formik.errors.email}</small>
								</div>
							)}
						</div>
					</div>
					<div className="align-self-start me-auto pt-1 mb-1">
						<label htmlFor="password">Password</label>
					</div>
					<div className="input-group flex-nowrap mb-4">
						<div className="d-flex flex-column w-100">
							<div className="d-flex flex-row input-group">
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-reveal"
								>
									<i className="bi bi-eye-fill"></i>
								</button>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									id="password"
									name="password"
									aria-label="Register_Password"
									aria-describedby="button-addon2"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
							</div>
							{formik.errors.password && (
								<div
									className="text-danger ms-1 position-absolute"
									style={{ bottom: "-1.45em" }}
								>
									<i className="bi bi-exclamation-triangle me-1"></i>
									<small>{formik.errors.password}</small>
								</div>
							)}
						</div>
					</div>
					<div className="d-flex flex-row mt-2">
						<button
							type="submit"
							className="btn btn-primary rounded-pill border me-auto px-4 my-3"
						>
							Login
						</button>
						<Link to="/register" className="btn btn-link ms-auto my-3">
							Don't have an account?
						</Link>
					</div>
				</div>
			</div>
		</form>
	);
}
