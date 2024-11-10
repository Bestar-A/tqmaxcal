import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} future={{ v7_startTransition: true }}>
			<App />
		</RouterProvider>
	</StrictMode>
);
