import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_URL } from "../fake-api/API_URL";

export default function Users() {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:2000/user`)
			.then(res => {
				console.log(res.data);

				setUserList(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, []);

	const GenerateFetchedUserData = () => {
		return userList.map(value => {
			return (
				<tr>
					<th scope="row">{value.id}</th>
					<td>{value.user_name}</td>
					<td>{value.email}</td>
					<td>{value.password}</td>
				</tr>
			);
		});
	};
	return (
		<div className="d-flex flex-column mt-5 container align-items-center">
			<h1>User Credentials:</h1>
			<table className="table table-sm table-striped table-dark mt-5">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Password</th>
					</tr>
				</thead>
				<tbody>
					<GenerateFetchedUserData />
				</tbody>
			</table>
		</div>
	);
}
