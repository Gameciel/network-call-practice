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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
	email: Yup.string()
		.email("Input format email yang tepat")
		.required("Tidak boleh kosong"),
	password: Yup.string()
		.matches(/[a-z]/, "at least one lowercase char")
		.matches(/[A-Z]/, "at least one uppercase char")
		.matches(/[0-9]/, "at least one number")
		.matches(/[@$!%*?&/.,]/, "at least one special char")
		.min(6, "Minimal 6 karakter yah")
		.required("Tidak boleh kosong"),
});

export default class FormikRegisterForm extends Component {
	render() {
		return (
			<div>
				<h1>woe</h1>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={RegisterSchema}
					onSubmit={values => {
						console.log(values);
					}}
				>
					{props => {
						console.log(props);
						return (
							<Form>
								<div>
									<label htmlFor="email">Email</label>
									<Field
										type="text"
										name="email"
										placeholder="Enter email"
										autoComplete="off"
									/>
									<ErrorMessage
										component="div"
										name="email"
										style={{ color: "red" }}
									/>
								</div>
								<div>
									<label htmlFor="passwprd">Password</label>
									<Field
										type="text"
										name="password"
										placeholder="Enter password"
										autoComplete="off"
									/>
									<ErrorMessage
										component="div"
										name="password"
										style={{ color: "red" }}
									/>
								</div>
								<button type="submit">Register</button>
							</Form>
						);
					}}
				</Formik>
			</div>
		);
	}
}
