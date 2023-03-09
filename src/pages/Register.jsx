import React, { useState } from "react";

export default function Register() {
	const [eyeMode, setEyeMode] = useState(false);

	return (
		<div className="mt-5 border rounded shadow-sm px-3 py-1 d-flex flex-column flex align-items-center justify-content-center">
			<h2 className="mx-5 mt-4">Register Form</h2>

			<div className="d-flex flex-column align-items-center justify-content-center w-100">
				<div className="align-self-start ms-4 mt-4 mb-2 me-auto">Name</div>
				<div class="input-group flex-nowrap">
					<div class="input-group mb-3 mx-4">
						<input
							type="text"
							class="form-control"
							placeholder="Name"
							aria-label="Register_Name"
							aria-describedby="button-addon2"
						/>
					</div>
				</div>
				<div className="align-self-start ms-4 mt-1 mb-2 me-auto">Email</div>
				<div class="input-group flex-nowrap">
					<div class="input-group mb-3 mx-4">
						<input
							type="email"
							class="form-control"
							placeholder="Email"
							aria-label="Register_Email"
							aria-describedby="button-addon2"
						/>
					</div>
				</div>
				<div className="align-self-start ms-4 mt-1 mb-2 me-auto">Password</div>
				<div class="input-group flex-nowrap">
					<div class="input-group mb-3 mx-4">
						<button
							class="btn btn-outline-secondary"
							type="button"
							id="button-reveal"
							onClick={() => setEyeMode(!eyeMode)}
						>
							{eyeMode ? (
								<i className="bi bi-eye-slash-fill"></i>
							) : (
								<i className="bi bi-eye-fill"></i>
							)}
						</button>
						{eyeMode ? (
							<input
								type="text"
								class="form-control"
								placeholder="Password"
								aria-label="Register_Password"
								aria-describedby="button-addon2"
							/>
						) : (
							<input
								type="password"
								class="form-control"
								placeholder="Password"
								aria-label="Register_Password"
								aria-describedby="button-addon2"
							/>
						)}
					</div>
				</div>
				<button
					type="button"
					className="btn btn-light border ms-4 px-4 my-4 me-auto"
				>
					Login
				</button>
			</div>
		</div>
	);
}
