import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./pages/Users";
import NavBar from "./components/NavBar";
import Redirect from "./components/Redirect";

import FormikRegisterPage from "./pages/RegisterPage";
import FormikLoginPage from "./pages/LoginPage";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers";

const store = configureStore({ reducer: rootReducer });

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<NavBar />
				<div className="container mt-5 pt-5 d-flex flex-row align-items-center justify-content-center">
					<Routes>
						<Route path="" element={<Redirect />} />
						<Route path="/users" element={<Users />} />
						<Route path="/register" element={<FormikRegisterPage />} />
						<Route path="/login" element={<FormikLoginPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
