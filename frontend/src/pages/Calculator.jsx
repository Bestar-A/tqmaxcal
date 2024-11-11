import MortGraph from "../components/MortGraph";

const Calculator = () => {
	return (
		<div className="px-20">
			<div className="flex max-w-[1600px]">
				<div className="min-w-[200px] h-full">
					<div>My Mortgage Data</div>
					<div></div>
				</div>
				<div className="flex flex-col flex-1">
					<div>Date, Month</div>
					<div className="h-72 w-full">
						<MortGraph />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
