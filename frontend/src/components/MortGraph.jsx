import months from "months";
import { Bar } from "react-chartjs-2";

const MortGraph = () => {
	const chartData = {
		labels: months,
		datasets: [
			{
				label: "Monthly Income",
				backgroundColor: "#ff6383",
				lineTension: 0.4,
				data: [20, 24, 30, 17, 28, 14, 19, 23, 21, 31, 27, 22],
				stepped: true,
			},
			{
				label: "Monthly Outcome",
				backgroundColor: "#63ff83",
				lineTension: 0.4,
				data: [24, 32, 33, 27, 31, 18, 22, 28, 28, 35, 37, 33],
				stepped: true,
			},
		],
	};
	const options = {
		scales: {
			x: {
				stacked: true,
			},
		},
		aspectRatio: 3,
		responsive: true,
	};
	return <Bar data={chartData} options={options} />;
};

export default MortGraph;
