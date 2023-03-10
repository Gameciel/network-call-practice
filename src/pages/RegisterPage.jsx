import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function FormikRegisterPage() {
	const [eyeMode, setEyeMode] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: values => {
			console.log(values);
		},
		validateOnChange: false,
		validateOnBlur: true,
		validationSchema: Yup.object({
			name: Yup.string()
				.min(6, "Minimal 6 karakter nama")
				.required("Nama tidak boleh kosong"),
			email: Yup.string()
				.email("Input format email yang tepat")
				.required("Email tidak boleh kosong"),
			password: Yup.string()
				.matches(/[A-Z]/, "at least one uppercase char")
				.matches(/[0-9]/, "at least one number")
				.matches(
					/[@$!%*?&/.,]/,
					"at least one special char @ $ ! % * ? & / . ,"
				)
				.min(6, "Minimal 6 karakter password")
				.required("Tidak boleh kosong"),
		}),
	});

	const ToggleVisibility = () => {
		if (eyeMode) {
			return <i className="bi bi-eye-fill"></i>;
		} else {
			return <i className="bi bi-eye-slash-fill"></i>;
		}
	};

	console.log(formik);
	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<div className="mt-5 border rounded shadow-sm px-5 py-1 pb-3 d-flex flex-column flex align-items-center justify-content-center">
				<h2 className="mx-5 mt-4">Register Form</h2>
				<div className="d-flex flex-column align-items-center justify-content-center w-100">
					<div className="align-self-start mt-3 mb-1">
						{formik.errors.name ? (
							<label htmlFor="name" className="text-danger">
								Name
							</label>
						) : (
							<label htmlFor="name">Name</label>
						)}
						<span className="fw-bold text-danger">*</span>
					</div>
					<div className="input-group flex-nowrap mb-4">
						<div className="input-group d-flex flex-column">
							<input
								type="text"
								name="name"
								id="name"
								className="form-control w-100 rounded"
								placeholder="Name"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.name && formik.touched.name && (
								<div
									className="text-danger ms-1 position-absolute"
									style={{ bottom: "-1.45em" }}
								>
									<small>
										<i className="bi bi-exclamation-triangle me-1"></i>
										{formik.errors.name}
									</small>
								</div>
							)}
						</div>
					</div>

					<div className="align-self-start me-auto pt-1 mb-1">
						{formik.errors.email ? (
							<label htmlFor="email" className="text-danger">
								Email
							</label>
						) : (
							<label htmlFor="email">Email</label>
						)}
						<span className="fw-bold text-danger">*</span>
					</div>
					<div className="input-group flex-nowrap mb-4">
						<div className="input-group d-flex flex-column">
							<input
								type="email"
								id="email"
								className="form-control w-100 rounded"
								name="email"
								placeholder="Email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.email && formik.touched.email && (
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
						{formik.errors.password ? (
							<label htmlFor="password" className="text-danger">
								Password
							</label>
						) : (
							<label htmlFor="password">Password</label>
						)}
						<span className="fw-bold text-danger">*</span>
					</div>
					<div className="input-group flex-nowrap mb-4">
						<div className="d-flex flex-column w-100">
							<div className="d-flex flex-row input-group">
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-reveal"
									onClick={() => setEyeMode(!eyeMode)}
								>
									<ToggleVisibility />
								</button>
								{eyeMode ? (
									<input
										type="text"
										className="form-control"
										placeholder="Password"
										id="password"
										name="password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								) : (
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										id="password"
										name="password"
										value={formik.values.password}
										onChange={formik.handleChange}
									/>
								)}
							</div>
							{formik.errors.password && formik.touched.password && (
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
							Register
						</button>
						<Link to="/login" className="btn btn-link ms-auto my-3">
							Already have an account?
						</Link>
					</div>
				</div>
			</div>
		</form>
	);
}
