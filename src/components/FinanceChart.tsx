"use client";
import Image from "next/image";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Jan",
		Income: 1000,
		Expense: 3100,
	},
	{
		name: "Feb",
		Income: 4000,
		Expense: 2300,
	},
	{
		name: "Mar",
		Income: 2000,
		Expense: 200,
	},
	{
		name: "Apr",
		Income: 3000,
		Expense: 2300,
	},
	{
		name: "May",
		Income: 2500,
		Expense: 2900,
	},
	{
		name: "Jun",
		Income: 3100,
		Expense: 3700,
	},
	{
		name: "Jul",
		Income: 1700,
		Expense: 1900,
	},
	{
		name: "Aug",
		Income: 1100,
		Expense: 1300,
	},
	{
		name: "Sep",
		Income: 700,
		Expense: 1100,
	},
	{
		name: "Oct",
		Income: 1700,
		Expense: 1900,
	},
	{
		name: "Nov",
		Income: 1300,
		Expense: 1700,
	},
	{
		name: "Dec",
		Income: 800,
		Expense: 1600,
	},
];
const FinanceChart = () => {
	return (
		<div className="bg-white rounded-xl w-full h-full p-4">
			{/* TITLE */}
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Finance</h1>
				<Image src="/moreDark.png" alt="" width={20} height={20} />
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
						tickMargin={10}
					/>
					<YAxis
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
						tickMargin={20}
					/>
					<Tooltip />
					<Legend
						align="center"
						verticalAlign="top"
						wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
					/>
					<Line
						type="monotone"
						dataKey="Income"
						stroke="#C3EBFA"
						strokeWidth={4}
					/>
					<Line
						type="monotone"
						dataKey="Expense"
						stroke="#CFCEFF"
						strokeWidth={4}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
