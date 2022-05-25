export default function (timeLabels, values) {
	return {
		color: ["#E30614"],
		tooltip: {
			trigger: "axis",
		},
		xAxis: {
			type: "category",
			data: timeLabels,
		},
		yAxis: {
			type: "value",
			axisLabel: {
				formatter: "{value} ms",
			},
		},
		series: [
			{
				data: values,
				type: "line",
			},
		],
	};
}
