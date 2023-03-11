import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import NavBar from "./components/NavBar";

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
				<div className="container mt-2 pt-5 d-flex flex-row align-items-center justify-content-center">
					<Routes>
						<Route path="/network-call-practice/users" element={<Users />} />
						<Route
							path="/network-call-practice/register"
							element={<FormikRegisterPage />}
						/>
						<Route
							path="/network-call-practice/login"
							element={<FormikLoginPage />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
