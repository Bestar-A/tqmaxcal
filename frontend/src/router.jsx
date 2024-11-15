import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Calculator from "./pages/Calculator";
import NotReady from "./pages/NotReady";
import GetStarted from "./pages/GetStarted";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/calculator" element={<NotReady />} />
			<Route path="/start" element={<NotReady />} />
			<Route path="/contact" element={<NotReady />} />
			<Route path="/guide" element={<NotReady />} />
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
