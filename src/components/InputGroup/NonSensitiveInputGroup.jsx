import React, { useState } from "react";

export default function NonSensitiveInputGroup(props) {
	return (
		<>
			<div className="align-self-start me-auto pt-1 mb-1">
				{props.formik.errors[props.field] &&
				props.formik.touched[props.field] ? (
					<label htmlFor={props.field} className="text-danger">
						{props.origin}
					</label>
				) : (
					<label htmlFor={props.field}>{props.origin}</label>
				)}
				{props.star && <span className="fw-bold text-danger">*</span>}
			</div>
			<div className="input-group flex-nowrap mb-4">
				<div className="d-flex flex-column w-100">
					<div className="d-flex flex-row input-group">
						<input
							type="text"
							className="form-control"
							placeholder={props.origin}
							id={props.field}
							name={props.field}
							value={props.formik.values[props.field]}
							onChange={props.formik.handleChange}
							onBlur={props.formik.handleBlur}
						/>
					</div>
					{props.formik.errors[props.field] &&
						props.formik.touched[props.field] && (
							<div
								className="text-danger ms-1 position-absolute"
								style={{ bottom: "-1.45em" }}
							>
								<i className="bi bi-exclamation-triangle me-1"></i>
								<small>{props.formik.errors[props.field]}</small>
							</div>
						)}
				</div>
			</div>
		</>
	);
}
