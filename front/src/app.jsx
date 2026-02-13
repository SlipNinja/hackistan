import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import DiscutionForm from "./components/forms/DiscutionForm";
import DiscutionPage from "./pages/DiscutionPage";
import "./../src/styles/index.css"
import api from "./api/axios"
import { useAuth } from "./hook/useAuth";


function App() {

	const { user, login} = useAuth();

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/discution/:id" element={<DiscutionPage />} />
				<Route
					path="/login"
					element={
						<LoginForm
							onSubmit={(email, password)=>login(email, password)}
						/>
					}
				/>
				<Route
					path="/register"
					element={
						<RegisterForm
							onSubmit={async (d) => {
								const { username, email, password } = d;
								const body = {
									username: username,
									email: email,
									password: password,
									role: "user",
								};
								const response = await api.post("/auth/register", body);
								console.log(response.data);
							}}
						/>
					}
				/> 
        <Route path="/discutionForm" element={<Navigate to="/login"/>} />
				{user && (
					<Route element={<PrivateRoute />}>
						<Route
							path="/discutionForm"
							element={
								<DiscutionForm
									onSubmit={async (d) => {
										const { title, content } = d;
										const body = {
											title: title,
											content: content,
											id_user: user["id_user"],
										};
										const response = await api.post("/discutions", body);
										return response;
									}}
								/>
							}
						/>
					</Route>
				)}
			</Routes>
			<Footer />
		</BrowserRouter>
	);

}
export default App;
