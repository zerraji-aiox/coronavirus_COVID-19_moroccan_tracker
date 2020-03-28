// update_benchmark()

function update_benchmark(models_data) {
    (y = null), (yAxis = null);

    d3.select('#d3id')
        .selectAll('*')
        .remove();

    // alert("continue")
    // alert(JSON.stringify(models_data))
    models = models_data;
    // models = models_data.map(i => {
    //   i.model_name = i.model_name;
    //   return i;
    // });

    var container = d3.select('#d3id'),
        width = 230,
        height = 200,
        margin = { top: 20, right: 20, bottom: 50, left: 75 },
        // margin = {top: 30, right: 20, bottom: 30, left: 50},
        barPadding = 0.1,
        axisTicks = { qty: 3, outerSize: 12, dateFormat: '%m-%d' };

    var svg = container
        .append('svg')
        // .attr("width", width)
        // .attr("height", height)
        .attr('viewBox',() => {
            if (window.navigator.userAgent.indexOf("Edge") > -1) {
                return '60 0 200 168';
            }else {
                return '60 0 140 168';
            }
        })
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    var xScale0 = d3
        .scaleBand()
        .range([0, width - margin.left - margin.right])
        .padding(barPadding);
    var xScale1 = d3.scaleBand();
    var yScale = d3
        .scaleLinear()
        .range([height - margin.top - margin.bottom, 0]);

    var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    var yAxis = d3
        .axisLeft(yScale)
        .ticks(axisTicks.qty)
        .tickSizeOuter(axisTicks.outerSize);

    xScale0.domain(models.map(d => d.model_name));
    xScale1.domain(['pareil']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, 1]);

    var model_name = svg
        .selectAll('.model_name')
        .data(models)
        .enter()
        .append('g')
        .attr('class', 'model_name')
        .attr('transform', d => `translate(${xScale0(d.model_name)},0)`);

    /* Add field1 bars */
    model_name
        .selectAll('.bar.bon')
        .data(d => [d])
        .enter()
        .append('rect')
        .attr('class', 'bar bon')
        .style('fill', 'red')
        .style('opacity', '0.7')
        .attr('x', d => xScale1('bon'))
        .attr('y', d => yScale(d.bon))
        .attr('width', xScale1.bandwidth())
        .attr('height', d => {
            return height - margin.top - margin.bottom - yScale(d.bon);
        });

    /* Add field2 bars */
    model_name
        .selectAll('.bar.pareil')
        .data(d => [d])
        .enter()
        .append('rect')
        .attr('class', 'bar pareil')
        .style('fill', 'yellow')
        .style('opacity', '0.7')
        .attr('x', d => xScale1('pareil'))
        .attr('y', d => yScale(d.pareil))
        .attr('width', xScale1.bandwidth())
        .attr('height', d => {
            return height - margin.top - margin.bottom - yScale(d.pareil);
        });

    /* Add field3 bars */
    model_name
        .selectAll('.bar.meilleur')
        .data(d => [d])
        .enter()
        .append('rect')
        .attr('class', 'bar meilleur')
        .style('fill', 'green')
        .style('opacity', '0.7')
        .attr('x', d => xScale1('meilleur'))
        .attr('y', d => yScale(d.meilleur))
        .attr('width', xScale1.bandwidth())
        .attr('height', d => {
            return height - margin.top - margin.bottom - yScale(d.meilleur);
        });
    // Add the X Axis
    svg.append('g')
        .attr('class', 'x axis2')
        .attr('font-weight', 'bold')
        .attr('font-size', '12')
        .attr(
            'transform',
            `translate(0,${height - margin.top - margin.bottom})`
        )
        .call(xAxis)
        .attr('fill', '#66a3ff');

    // Add the Y Axis
    svg.append('g')
        .attr('class', 'y axis2')
        .attr('font-weight', 'bold')
        .call(yAxis)
        .attr('fill', '#66a3ff');

    //***********************
    // add legend
    /*
   var keys = ["MoinsBon ", "Pareil", "meilleur"]
   
   // Usually you have a color scale in your chart already
   var color = d3.scaleOrdinal()
     .domain(keys)
     .range(['red','yellow','green']);
   
   // Add one dot in the legend for each name.
   var size = 10
   svg.selectAll("mydots")
     .data(keys)
     .enter()
     .append("rect")
       .attr("x", 90)
       .attr("y", function(d,i){ return 0 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
       .attr("width", size)
       .attr("height", size)
       .style("fill", function(d){ return color(d)})
       .style('stroke','black')
   
   // Add one dot in the legend for each name.
   svg.selectAll("mylabels")
     .data(keys)
     .enter()
     .append("text")
       .attr("x", 100 + size*1.2)
       .attr("y", function(d,i){ return 0 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
       .style("fill", function(d){ return color(d)})
       .text(function(d){ return d})
       .attr("text-anchor", "left")
       .style("alignment-baseline", "middle")*/
}
