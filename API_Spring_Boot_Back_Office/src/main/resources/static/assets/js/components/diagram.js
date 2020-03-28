var margin = { top: 20, right: 20, bottom: 50, left: 70 };
var width = 500 - margin.left - margin.right;
var height = 300 - margin.top - margin.bottom;

//add svg with margin !important
//this is svg is actually group
var svg = d3
    .select('#diagram')
    .append('svg')
    // .attr("width",width+margin.left+margin.right)
    // .attr("height",height+margin.top+margin.bottom)
    .attr('viewBox', '31 0 490 260')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .append('g') //add group to leave margin for axis
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//the code above should be same

// var parseTime = d3.timeParse("%d-%m-%Y");
var parseTime = d3.timeParse('%d-%m-%Y');
//var formatTime = d3.timeFormat("%e %B");
// var xFormat = "%b-%Y";
var xFormat = '%Y';
// format the data

data1.forEach(function(d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
});

/*data1.forEach(function(d){
  		d.date = formatTime(d.date);
      d.value = +d.value;
  	});*/
//for each d, d[0] is the first num, d[1] is the second num
//set y scale
var yScale = d3
    .scaleLinear()
    .rangeRound([0, height])
    .domain([
        d3.max(data1, function(d) {
            return Math.abs(d.value);
        }),
        -d3.max(data1, function(d) {
            return Math.abs(d.value);
        })
    ]); //show negative

//add x axis

var xScale = d3
    .scaleTime()
    .range([0, width])
    .domain(
        d3.extent(data1, function(d) {
            return d.date;
        })
    ); //scaleBand is used for  bar chart

//sort x
data1.sort(function(a, b) {
    if (a[0] < b[0]) {
        return -1;
    } else {
        return 1;
    }
});

var area = d3
    .area()
    .curve(d3.curveCardinal)
    .x1(function(d) {
        return xScale(d.date);
    })
    .y1(function(d) {
        return yScale(d.value);
    }) //draw the top line. Similar idea with line chart
    .x0(function(d) {
        return xScale(d.date);
    })
    .y0(yScale(0)); //draw the base line. Note: the x0 cannot be 0. it should be a line (x0,y0) --> (xScale(d[0]),0)  --> x axis

//add area to svg. use path-->to know svg path
//must add css class area, you can try to remove it and see the result
svg.append('g')
    .append('path')
    .attr('class', 'area')
    .attr('d', area(data1));

//parse data

var line = d3
    .line()
    .curve(d3.curveCardinal)
    .x(function(d) {
        return xScale(d.date);
    })
    .y(function(d) {
        return yScale(d.value);
    });

svg.append('g')
    .append('path')
    .attr('class', 'line')
    .attr('d', line(data1));

//add x and y axis
var yAxis = d3.axisLeft(yScale);
svg.append('g').call(yAxis);
// .attr('fill-opacity', '0')
// .attr('fill', '#66a3ff');

var xAxis = d3
    .axisBottom(xScale)
    .tickFormat(d3.timeFormat(xFormat)); /*.tickFormat("");remove tick label*/
svg.append('g')
    .call(xAxis)
    .attr('transform', 'translate(2,' + height / 2 + ')');
// .attr('fill', '#66a3ff');

//add label for x axis and y axis
/*svg.append("text").text("Y Label")
		.attr("x",0-height/2)
		.attr("y",0-margin.left)
		.attr("dy","1em")
      	.style("text-anchor", "middle")
		.attr("transform","rotate(-90)");
	svg.append("text").text("The area fill gradient color")
		.attr("x",width/2)
		.attr("y",height+margin.bottom)
      	.style("text-anchor", "middle");*/

//fill area with gradient color
svg.append('linearGradient')
    .attr('id', 'area-gradient')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', 0)
    .attr(
        'y1',
        yScale(
            d3.min(data1, function(d) {
                return d.date;
            })
        )
    )
    .attr('x2', 0)
    .attr(
        'y2',
        yScale(
            d3.max(data1, function(d) {
                return d.value;
            })
        )
    )
    .selectAll('stop')
    .data([
        /* {offset: "0%", color: "#edf3f8"},		
      {offset: "30%", color: "#dbe7f0"},	
      {offset: "45%", color: "#c9dae9"},		
      {offset: "55%", color: "#a4c2da"},		
      {offset: "60%", color: "#b7cee1"},	
      {offset: "100%", color: "#a2c0d9"}	*/
        { offset: '0%', color: '#f0e8db' },
        { offset: '50%', color: '#dabba4' },
        { offset: '100%', color: '#d9b5a2' }
    ])
    .enter()
    .append('stop')
    .attr('offset', function(d) {
        return d.offset;
    })
    .attr('stop-color', function(d) {
        return d.color;
    });
