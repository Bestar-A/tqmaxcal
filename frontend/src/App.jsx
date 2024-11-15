import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

Chart.register(CategoryScale);

const App = () => {
	return (
		<div className="relative">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
