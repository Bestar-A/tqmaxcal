import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

Chart.register(CategoryScale);

const App = () => {
	return (
		<div className="relative">
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
