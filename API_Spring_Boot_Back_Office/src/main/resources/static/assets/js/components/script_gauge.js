function update_gauge()
{
	function update_gauge_all(powerGauge,value) {
		var value = value;
		powerGauge.render();
		//var value =72.43;
		function updateReadings() {
			// just pump in random data here...
			powerGauge.update(value);
		}
		
		// every few seconds update reading values
		updateReadings();
		setInterval(function() {
			updateReadings();
		}, 5 * 1000);
	}
	
	var powerGauge_CES = gauge2('#power-gauge_CES', {});
	update_gauge_all(powerGauge_CES,data_gauge[0].size)
				
	
	var powerGauge_NPS = gauge2('#power-gauge_NPS', {});
	update_gauge_all(powerGauge_NPS,data_gauge[1].size)
				
	
	
	var powerGauge_CSAT = gauge('#power-gauge_CSAT', {});
	update_gauge_all(powerGauge_CSAT,data_gauge[2].size)
	
	
	
}