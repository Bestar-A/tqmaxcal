import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Calculator from "./pages/Calculator";
import Payment from "./pages/Payment";
import Notyet from "./pages/Notyet";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/payment" element={<Payment />} />
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
