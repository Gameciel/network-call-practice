import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColumnGroup } from "primereact/columngroup";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Row } from "primereact/row";
import { API_URL } from "../fake-api/API_URL";

export default function Users() {
	return (
		<div className="d-flex flex-column container align-items-center mb-5 pb-5">
			<div class="alert alert-info alert-dismissible fade show" role="alert">
				<h5>If data doesn't show up:</h5>
				<div className="d-flex flex-row">
					<i className="bi bi-info-circle me-2"></i>
					<div>
						My server might be having <b>outage</b>: try again later.
					</div>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
					></button>
				</div>
			</div>

			<h1 className="mb-4 mt-3 fw-bolder">User credentials:</h1>
			<GenerateFetchedUserData />
		</div>
	);
}

const GenerateFetchedUserData = () => {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}/user/`)
			.then(res => {
				setUserList(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, []);

	const statusBodyTemplate = user => {
		return <Tag value={user.role} severity={getSeverity(user)}></Tag>;
	};

	const getSeverity = user => {
		switch (user.role) {
			case "user":
				return "info";

			case "admin":
				return "danger";

			default:
				return null;
		}
	};

	const footerGroup = (
		<ColumnGroup>
			<Row>
				<Column
					footer="Total User:"
					colSpan={0}
					footerStyle={{ textAlign: "left" }}
				/>
				<Column footer={userList.length} />
				<Column colSpan={4} />
			</Row>
		</ColumnGroup>
	);
	return (
		<div className="card">
			<DataTable
				value={userList}
				size={"large"}
				stripedRows
				paginator
				sortMode="single"
				rows={5}
				rowsPerPageOptions={[5, 10]}
				footerColumnGroup={footerGroup}
				tableStyle={{ minWidth: "50rem" }}
			>
				<Column field="id" sortable header="ID"></Column>
				<Column field="user_name" header="Name"></Column>
				<Column field="email" header="E-mail"></Column>
				<Column
					field="password"
					className="font-monospace fw-bold"
					header="Password"
				></Column>
				<Column header="Role" body={statusBodyTemplate}></Column>
			</DataTable>
		</div>
	);
};
