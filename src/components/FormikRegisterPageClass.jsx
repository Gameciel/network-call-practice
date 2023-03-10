// Name
// Not empty, min 6 chars

// Email
// Not empty, must be a valid email format

// Password
// Not empty, min 6 chars, one lowercase, one uppercase, one number, one symbol
// ([0-9]+)([\W]+)([A-Z]+)([a-z]+)
// (([0-9]){1,}|([a-z]){1,}|([A-Z]){1,}|(\W){1,}){4,}
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/.,])[A-Za-z\d@$!%*?&/.,]{6,}$/

import React, { Component } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

export default class FormikRegisterPage extends Component {
	state = {
		eyeMode: false,
	};

	RegisterSchema = Yup.object().shape({
		name: Yup.string()
			.min(6, "Minimal 6 karakter nama")
			.required("Nama tidak boleh kosong"),
		email: Yup.string()
			.email("Input format email yang tepat")
			.required("Email tidak boleh kosong"),
		password: Yup.string()
			.matches(/[A-Z]/, "at least one uppercase char")
			.matches(/[0-9]/, "at least one number")
			.matches(/[@$!%*?&/.,]/, "at least one special char")
			.min(6, "Minimal 6 karakter password")
			.required("Tidak boleh kosong"),
	});

	render() {
		return (
			<div>
				<h1>woe</h1>
				<Formik
					initialValues={{ name: "", email: "", password: "" }}
					validationSchema={this.RegisterSchema}
					onSubmit={values => {}}
				>
					{props => {
						console.log(props);
						return (
							<Form>
								<div className="mt-5 border rounded shadow-sm px-3 py-1 d-flex flex-column flex align-items-center justify-content-center">
									<h2 className="mx-5 mt-4">Register Form</h2>

									<div className="d-flex flex-column align-items-center justify-content-center w-100">
										<div className="align-self-start ms-4 mt-4 mb-2 me-auto">
											<label htmlFor="name">Name</label>
										</div>
										<div class="input-group flex-nowrap">
											<div class="input-group mb-3 mx-4">
												<input
													type="text"
													name="name"
													id="name"
													class="form-control"
													placeholder="Name"
													aria-label="Register_Name"
													aria-describedby="button-addon2"
												/>
											</div>
										</div>
										<ErrorMessage
											component="div"
											name="name"
											style={{ color: "red" }}
										/>
										<div className="align-self-start ms-4 mt-1 mb-2 me-auto">
											<label htmlFor="email">Email</label>
										</div>
										<div class="input-group flex-nowrap">
											<div class="input-group mb-3 mx-4">
												<input
													type="email"
													id="email"
													class="form-control"
													name="email"
													placeholder="Email"
													aria-label="Register_Email"
													aria-describedby="button-addon2"
												/>
											</div>
										</div>
										<ErrorMessage
											component="div"
											name="email"
											style={{ color: "red" }}
										/>
										<div className="align-self-start ms-4 mt-1 mb-2 me-auto">
											<label htmlFor="password">Password</label>
										</div>
										<div class="input-group flex-nowrap">
											<div class="input-group mb-3 mx-4">
												<button
													class="btn btn-outline-secondary"
													type="button"
													id="button-reveal"
													onClick={() =>
														this.setState({ eyeMode: !this.state.eyeMode })
													}
												>
													{this.state.eyeMode ? (
														<i className="bi bi-eye-slash-fill"></i>
													) : (
														<i className="bi bi-eye-fill"></i>
													)}
												</button>
												{this.state.eyeMode ? (
													<input
														type="text"
														class="form-control"
														placeholder="Password"
														id="password"
														name="password"
														aria-label="Register_Password"
														aria-describedby="button-addon2"
													/>
												) : (
													<input
														type="password"
														class="form-control"
														placeholder="Password"
														id="password"
														name="password"
														aria-label="Register_Password"
														aria-describedby="button-addon2"
													/>
												)}
											</div>
											<ErrorMessage
												component="div"
												name="name"
												style={{ color: "red" }}
											/>
										</div>
										<button
											type="submit"
											className="btn btn-light border ms-4 px-4 my-4 me-auto"
										>
											Login
										</button>
									</div>
								</div>
							</Form>
						);
						// return (
						// 	<Form>
						// 		<div>
						// 			<label htmlFor="email">Email</label>
						// 			<Field
						// 				type="text"
						// 				name="email"
						// 				placeholder="Enter email"
						// 				autoComplete="off"
						// 			/>
						// 			<ErrorMessage
						// 				component="div"
						// 				name="email"
						// 				style={{ color: "red" }}
						// 			/>
						// 		</div>
						// 		<div>
						// 			<label htmlFor="passwprd">Password</label>
						// 			<Field
						// 				type="text"
						// 				name="password"
						// 				placeholder="Enter password"
						// 				autoComplete="off"
						// 			/>
						// 			<ErrorMessage
						// 				component="div"
						// 				name="password"
						// 				style={{ color: "red" }}
						// 			/>
						// 		</div>
						// 		<button type="submit">Register</button>
						// 	</Form>
						// );
					}}
				</Formik>
			</div>
		);
	}
}
