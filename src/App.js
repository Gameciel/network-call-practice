import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container d-flex flex-row align-items-center justify-content-center">
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
