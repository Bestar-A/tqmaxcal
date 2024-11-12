import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Calculator from "./pages/Calculator";
import Notyet from "./pages/Notyet";
import GetStarted from "./pages/GetStarted";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/start" element={<GetStarted />} />
			<Route path="/contact" element={<ContactUs />} />
			<Route path="/guide" element={<Notyet />} />
		</Route>
	),
	{
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_relativeSplatPath: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
);
