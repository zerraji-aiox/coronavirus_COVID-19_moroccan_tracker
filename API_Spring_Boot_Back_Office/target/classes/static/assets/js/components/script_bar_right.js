//updatingBarChart.js
var arcColorFn2	= d3.interpolateHsl(d3.rgb('lemonchiffon'),d3.rgb('red'));
var setup = function(targetID){
	//Set size of svg element and chart
	var margin = {top: 0, right: 0, bottom: 0, left: 270},
		width = 2000 - margin.left - margin.right,
		height = 200 - margin.top - margin.bottom,
		categoryIndent = 4*15 + 5,
		defaultBarWidth = 400;

	//Set up scales
	var x = d3.scale.linear()
	  .domain([0,defaultBarWidth])
	  .range([0,width/3]);
	var y = d3.scale.ordinal()
	  .rangeRoundBands([0, height], 0.1, 0);

	//Create SVG element
	d3.select(targetID).selectAll("svg").remove()
	var svg = d3.select(targetID).append("svg")
		.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
	  .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        //.attr('transform',"translate(600,0)")
        //.attr('transform',scale(-1))
       ;
	
	//Package and export settings
	var settings = {
	  margin:margin, width:width, height:height, categoryIndent:categoryIndent,
	  svg:svg, x:x, y:y
	}
	return settings;
}

function chart_negative_frequence(){
	var redrawChart = function(targetID, newdata) {

		//Import settings
		var margin=settings.margin, width=settings.width, height=settings.height, categoryIndent=settings.categoryIndent, 
		svg=settings.svg, x=settings.x, y=settings.y;
		
		//Reset domains
		y.domain(newdata.sort(function(a,b){
		  return b.frequence - a.frequence;
		})
		  .map(function(d) { return d.topic; }));
		var barmax = d3.max(newdata, function(e) {
		  return e.frequence;
		});
		x.domain([0,barmax]);
	
		/////////
		//ENTER//
		/////////
	
		//Bind new data to chart rows 
	
		//Create chart row and move to below the bottom of the chart
		var chartRow = svg.selectAll("g.chartRow")
		  .data(newdata, function(d){ return d.topic});
		var newRow = chartRow
		  .enter()
		  .append("g")
		  .attr("class", "chartRow")
		.attr("transform", "translate(0," + height + margin.top + margin.bottom + ")")
		  ;
	
		//Add rectangles
		newRow.insert("rect")
		  .attr("class","bar_right")
		  .attr("x", 0)
		  .attr("opacity",0)
		  .attr("height", y.rangeBand())
		  .attr("width", function(d) { return x(d.frequence)^0.5;}) 
	
		//Add frequence labels
		newRow.append("text")
		  .attr("class","label")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx","0.5em")
		  .text(function(d){return d.frequence;})
		  ; 
		  newRow.append("text")
		  .attr("class","label2")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx",function(d){return(Math.max(x(d.frequence +5),x(25)));})
		  .text(function(d){return d.polarity;})
		  ; 

		  newRow.append("text")
	 	 .attr("class","label3")
	  	.attr("y", y.rangeBand()/2)
	  	.attr("x",0)
	  	.attr("opacity",0)
	 	 .attr("dy",".35em")
	  	.attr("dx",function(d){return(Math.max(x(d.frequence+9),x(29)))})
		  .text('|'); 

		  newRow.append("text")
		  .attr("class","label4")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx",function(d){return(Math.max(x(d.frequence+11),x(31)))})
		  .text(function(d){return d.difference_polarity;}); 
		  
		  newRow.append('text')
		  .attr("class",'fas fa-arrow-circle-up')
		  //.attr('text-anchor', 'middle')
		  //.attr('dominant-baseline', 'central')
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr('font-family', 'FontAwesome')
		  .attr('font-size', '20px')
		  .attr("dx",function(d){return(Math.max(x(d.frequence+15),x(35)))})
		  .attr("dy",".35em")
		  .text(function(d){if (d.difference_polarity>0){return '\uf0aa'} else if (d.difference_polarity<0) {return '\uf0ab'} else {return '\uf52c'}})
		  .attr('fill',function(d){if (d.difference_polarity>0){return 'green'} else if (d.difference_polarity<0) {return 'red'} else {return 'blue'}});
		  
		//Add Headlines
		newRow.append("text")
		  .attr("class","category")
		  .attr("text-overflow","ellipsis")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",categoryIndent)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx",".5em")
		  .text(function(d){return d.topic});
	
	
		//////////
		//UPDATE//
		//////////
		
		//Update bar widths
		chartRow.select(".bar_right").transition()
		  .duration(300)
		  .attr("width", function(d) { return x(d.frequence)^0.5;})
		  .attr("opacity",1)
		  .attr('fill',function(d) { return arcColorFn2(d.polarity/100);});
	
		//Update data labels
		chartRow.select(".label").transition()
		  .duration(300)
		  .attr("opacity",1)
		  .tween("text", function(d) { 
			var i = d3.interpolate(+this.textContent.replace(/\,/g,''), +d.frequence);
			return function(t) {
			  this.textContent = Math.round(i(t));
			};
		  });
	
		  chartRow.select(".label2").transition()
		  .duration(300)
		  .attr("opacity",1)
		  .tween("text", function(d) { 
			var i = d3.interpolate(+this.textContent.replace(/\,/g,''), -d.polarity);
			return function(t) {
			  this.textContent = Math.round(i(t));
			};
		  });

		  chartRow.select(".label3").transition()
		  .duration(300)
		  .attr("opacity",1);

		  chartRow.select(".label4").transition()
		  .duration(300)
		  .attr("opacity",1);	
	
		//Fade in categories
		chartRow.select(".category").transition()
		  .duration(300)
		  .attr("opacity",1);
	
	
		////////
		//EXIT//
		////////
	
		//Fade out and remove exit elements
		chartRow.exit().transition()
		  .style("opacity","0")
		  .attr("transform", "translate(0," + (height + margin.top + margin.bottom) + ")")
		  .remove();
	
	
		////////////////
		//REORDER ROWS//
		////////////////
	
		var delay = function(d, i) { return 200 + i * 30; };
	
		chartRow.transition()
			.delay(delay)
			.duration(900)
			.attr("transform", function(d){ return "translate(610," + y(d.topic) + ")"; });
	};
	
	
	
	//Pulls data
	//Since our data is fake, adds some random changes to simulate a data stream.
	//Uses a callback because d3.json loading is asynchronous
	var pullData = function(settings,callback){
		//d3.json("fakeData.json", function (err, data){
			//if (err) return console.warn(err);
		   var data = data_bar_right
			var newData = data;
			data.forEach(function(d,i){
				var newfrequence = d.frequence 
				newData[i].frequence = newfrequence 
			})
	
			newData = formatData(newData);
	
			callback(settings,newData);
		}
	//}
	
	//Sort data in descending order and take the top 10 frequences
	var formatData = function(data){
		return data.sort(function (a, b) {
			return b.frequence - a.frequence;
		  })
		  .slice(0, 10);
	}
	
	//I like to call it what it does
	var redraw = function(settings){
		pullData(settings,redrawChart)
	}
	
	//setup (includes first draw)
	var settings = setup('#chart_right');
	redraw(settings)
	
	//Repeat every 3 seconds
	setInterval(function(){
		redraw(settings)
	}, 3000);

}

function chart_negative_polarity(){
	var redrawChart = function(targetID, newdata) {

		//Import settings
		var margin=settings.margin, width=settings.width, height=settings.height, categoryIndent=settings.categoryIndent, 
		svg=settings.svg, x=settings.x, y=settings.y;
	
		//Reset domains
		y.domain(newdata.sort(function(a,b){
		  return b.polarity - a.polarity;
		})
		  .map(function(d) { return d.topic; }));
		var barmax = d3.max(newdata, function(e) {
		  return e.polarity;
		});
		x.domain([0,barmax]);
	
		/////////
		//ENTER//
		/////////
	
		//Bind new data to chart rows 
	
		//Create chart row and move to below the bottom of the chart
		var chartRow = svg.selectAll("g.chartRow")
		  .data(newdata, function(d){ return d.topic});
		var newRow = chartRow
		  .enter()
		  .append("g")
		  .attr("class", "chartRow")
		  .attr("transform", "translate(0," + height + margin.top + margin.bottom + ")")
		  ;
	
		//Add rectangles
		newRow.insert("rect")
		  .attr("class","bar_right")
		  .attr("x", 0)
		  .attr("opacity",0)
		  .attr("height", y.rangeBand())
		  .attr("width", function(d) { return x(d.frequence)^0.5;}) 
	
		//Add polarity labels
		newRow.append("text")
		  .attr("class","label")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx","0.5em")
		  .text(function(d){return d.polarity;}); 
		  newRow.append("text")
		  .attr("class","label2")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx",function(d){return(Math.max(x(d.frequence+5),x(25)));})
		  .text(function(d){return d.frequence;}); 

		  newRow.append("text")
	 	 .attr("class","label3")
	  	.attr("y", y.rangeBand()/2)
	  	.attr("x",0)
	  	.attr("opacity",0)
	 	 .attr("dy",".35em")
	  	.attr("dx",function(d){return(Math.max(x(d.frequence+9),x(29)))})
		  .text('|'); 
		  
		  newRow.append("text")
		  .attr("class","label4")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",0)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx",function(d){return(Math.max(x(d.frequence+11),x(31)))})
		  .text(function(d){return d.difference_frequence;}); 

		  newRow.append('text')
	  .attr("class",'fas fa-arrow-circle-up')
	  //.attr('text-anchor', 'middle')
	  //.attr('dominant-baseline', 'central')
	  .attr("y", y.rangeBand()/2)
	  .attr("x",0)
	  .attr('font-family', 'FontAwesome')
	  .attr('font-size', '20px')
	  .attr("dx",function(d){return(Math.max(x(d.frequence+15),x(35)))})
	  .attr("dy",".35em")
	  .text(function(d){if (d.difference_frequence>0){return '\uf0aa'} else if (d.difference_frequence<0) {return '\uf0ab'} else {return '\uf52c'}})
	   .attr('fill',function(d){if (d.difference_frequence>0){return 'green'} else if (d.difference_frequence<0) {return 'red'} else {return 'blue'}});

		//Add Headlines
		newRow.append("text")
		  .attr("class","category")
		  .attr("text-overflow","ellipsis")
		  .attr("y", y.rangeBand()/2)
		  .attr("x",categoryIndent)
		  .attr("opacity",0)
		  .attr("dy",".35em")
		  .attr("dx","0.5em")
		  .text(function(d){return d.topic});
	
	
		//////////
		//UPDATE//
		//////////
		
		//Update bar widths
		chartRow.select(".bar_right").transition()
		  .duration(300)
		  .attr("width", function(d) { return x(d.frequence)^0.5;})
		  .attr("opacity",1)
		  .attr('fill',function(d) { return arcColorFn2(d.polarity/100);});
	
		//Update data labels
		chartRow.select(".label").transition()
		  .duration(300)
		  .attr("opacity",1)
		  .tween("text", function(d) { 
			var i = d3.interpolate(+this.textContent.replace(/\,/g,''), -d.polarity);
			return function(t) {
			  this.textContent = Math.round(i(t));
			};
		  });
		  chartRow.select(".label2").transition()
		  .duration(300)
		  .attr("opacity",1)
		  .tween("text", function(d) { 
			var i = d3.interpolate(+this.textContent.replace(/\,/g,''), d.frequence);
			return function(t) {
			  this.textContent = Math.round(i(t));
			};
		  });

		  chartRow.select(".label3").transition()
		  .duration(300)
		  .attr("opacity",1);	
	
		  chartRow.select(".label4").transition()
		  .duration(300)
		  .attr("opacity",1);	

		//Fade in categories
		chartRow.select(".category").transition()
		  .duration(300)
		  .attr("opacity",1);
	
	
		////////
		//EXIT//
		////////
	
		//Fade out and remove exit elements
		chartRow.exit().transition()
		  .style("opacity","0")
		  .attr("transform", "translate(0," + (height + margin.top + margin.bottom) + ")")
		  .remove();
	
	
		////////////////
		//REORDER ROWS//
		////////////////
	
		var delay = function(d, i) { return 200 + i * 30; };
	
		chartRow.transition()
			.delay(delay)
			.duration(900)
			.attr("transform", function(d){ return "translate(610," + y(d.topic) + ")"; });
	};
	
	
	
	//Pulls data
	//Since our data is fake, adds some random changes to simulate a data stream.
	//Uses a callback because d3.json loading is asynchronous
	var pullData = function(settings,callback){
		//d3.json("fakeData.json", function (err, data){
			//if (err) return console.warn(err);
		   var data = data_bar_right
			var newData = data;
			data.forEach(function(d,i){
				var newpolarity = d.polarity 
				newData[i].polarity = newpolarity 
			})
	
			newData = formatData(newData);
	
			callback(settings,newData);
		}
	//}
	
	//Sort data in descending order and take the top 10 polaritys
	var formatData = function(data){
		return data.sort(function (a, b) {
			return b.polarity - a.polarity;
		  })
		  .slice(0, 10);
	}
	
	//I like to call it what it does
	var redraw = function(settings){
		pullData(settings,redrawChart)
	}
	
	//setup (includes first draw)
	var settings = setup('#chart_right');
	redraw(settings)
	
	//Repeat every 3 seconds
	setInterval(function(){
		redraw(settings)
	}, 3000);

}




  
