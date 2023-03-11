import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
	return (
		<div className="d-flex flex-column">
			<div className="alert alert-danger">
				<h5>
					<b>WARNING</b>
				</h5>
				<div className="d-flex flex-row">
					<i className="bi bi-exclamation-triangle-fill me-2"></i>

					<div>
						The registered password{" "}
						<b className="text-decoration-underline">DOES NOT</b> get hashed!
					</div>
				</div>
				<div>
					<i className="bi bi-exclamation-triangle-fill me-2"></i>
					<b>ONLY enter dummy data.</b>
				</div>
			</div>
			<RegisterForm />
		</div>
	);
}
