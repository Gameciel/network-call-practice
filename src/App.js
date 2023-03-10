import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

import FormikRegisterPage from "./components/FormikRegisterPage";
import FormikLoginPage from "./components/FormikLoginPage";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container mt-5 pt-5 d-flex flex-row align-items-center justify-content-center">
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/register" element={<FormikRegisterPage />} />
					<Route path="/login" element={<FormikLoginPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
