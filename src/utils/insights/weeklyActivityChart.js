export default function (data) {
	return {
		color: ["#E30614"],
		legend: {},
		tooltip: {},
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: data,
				type: "bar",
				label: {
					normal: {
						show: true,
						position: "inside",
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: "15",
							fontWeight: "bold",
						},
					},
				},
			},
		],
	};
}
