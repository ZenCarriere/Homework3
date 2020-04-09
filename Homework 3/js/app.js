new Chart(document.getElementById('BronzeChart'), {
	type: 'bar',
	data: {
		labels: ['Fin','Swe','Rus','USA','Ger','Sui','Nor','Cze','Can','Aut'],
		datasets: [{
			label:'# of Bronze medals',
			data:[221,177,172,167,151,132,127,111,107,103],
			backgroundColor: ['#f2f2f2','#3385ff','#e60000','#0039e6','#e68a00','#ff3333','#b30000','#000099','#cc2900','#991f00'],
			borderColor: ['#3366ff','#ffff00','#3333ff','#ff1a1a','#000000','#f2f2f2',' #1aa3ff','#f2f2f2','#f2f2f2','#f2f2f2'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});



new Chart(document.getElementById('TotalBChart'), {
	type: 'bar',
	data: {
		labels: ['Fin','Swe','Rus','USA','Ger','Sui','Nor','Cze','Can','Aut'],
		datasets: [{
			label:'Points',
			data:[221,177,172,167,151,132,127,111,107,103],
			backgroundColor: ['#f2f2f2','#3385ff','#e60000','#0039e6','#e68a00','#ff3333','#b30000','#000099','#cc2900','#991f00'],
			borderColor: ['#3366ff','#ffff00','#3333ff','#ff1a1a','#000000','#f2f2f2',' #1aa3ff','#f2f2f2','#f2f2f2','#f2f2f2'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});




new Chart(document.getElementById('SilverChart'), {
	type: 'bar',
	data: {
		labels: ['USA','Can','Rus','Ger','Nor','Fin','Swe','Aut','Cze','Sui'],
		datasets: [{
			label:'# of Silver medals',
			data:[319,203,187,176,171,147,129,98,92,77],
			backgroundColor: ['#0039e6','#cc2900','#e60000','#e68a00','#b30000','#f2f2f2','#3385ff','#991f00','#000099','#ff3333'],
			borderColor: ['#ff1a1a','#f2f2f2','#3333ff','#000000','#1aa3ff','#3366ff','#ffff00','#f2f2f2','#f2f2f2','#f2f2f2'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});




new Chart(document.getElementById('TotalSChart'), {
	type: 'bar',
	data: {
		labels: ['USA','Rus','Fin','Can','Ger','Nor','Swe','Aut','Cze','Sui'],
		datasets: [{
			label:'Points',
			data:[805,546,515,513,503,469,435,299,295,286],
			backgroundColor: ['#0039e6','#e60000','#f2f2f2','#cc2900','#e68a00','#b30000','#3385ff','#991f00','#000099','#ff3333'],
			borderColor: ['#ff1a1a','#3333ff','#3366ff','#f2f2f2','#000000','#1aa3ff','#ffff00','#f2f2f2','#f2f2f2','#f2f2f2'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});





new Chart(document.getElementById('GoldChart'), {
	type: 'bar',
	data: {
		labels: ['Rus','Can','Ger','USA','Nor','Swe','Aut','Sui','Fin','Ita'],
		datasets: [{
			label:'# of Gold medals',
			data:[344,315,195,167,159,127,79,76,66,58],
			backgroundColor: ['#e60000','#cc2900','#e68a00','#0039e6','#b30000','#3385ff','#991f00','#ff3333','#f2f2f2','#008000'],
			borderColor: ['#3333ff','#f2f2f2','#000000','#ff1a1a','#1aa3ff','#ffff00','#f2f2f2','#f2f2f2','#3366ff','#ff0000'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});




new Chart(document.getElementById('TotalGChart'), {
	type: 'bar',
	data: {
		labels: ['Rus','Can','USA','Ger','Nor','Swe','Fin','Aut','Sui','Cze'],
		datasets: [{
			label:'Points',
			data:[1578,1458,1306,1088,946,816,713,536,514,385],
			backgroundColor: ['#e60000','#cc2900','#0039e6','#e68a00','#b30000','#3385ff','#f2f2f2','#991f00','#ff3333','#000099'],
			borderColor: ['#3333ff','#f2f2f2','#ff1a1a','#000000','#1aa3ff','#ffff00','#3366ff','#f2f2f2','#f2f2f2','#f2f2f2'],
			borderWidth: 4
		}]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuint'
		}
	}
});
