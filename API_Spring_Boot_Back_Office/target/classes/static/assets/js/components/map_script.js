

//     var width=610;
//     var height=655;

//     var svg_map =d3.select('svg #svg_map');
//     var g_legend= d3.select('g#legend1');
    


// //*****************************
// /*  Colors 
// * #d80000 == red dark
// * #e67e00 == orange dark
// * #ffff00 == yellow dark
// * #00b100 == green dark
// */
// //****************************
//  /* KPI : CES */
// //***************************
//     function changeColor1(){
//     d3.selectAll("#reg_1,#reg_3,#reg_4,#reg_5,#reg_6,#reg_7")
//       .transition()
//       .duration(1000)
//       .style("fill", "#00b100");
//     d3.select("#text_reg_5")
//       .mark("\uf0ab")// arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','red');
//     d3.select("#text_reg_6")
//       .mark("88%")
//       .style('fill','white');
//     d3.select("#reg_2")
//       .transition()
//       .duration(1000)
//       .style("fill", "#e67e00");
//     d3.select("#text_reg_2")
//       .mark("48%")
//       .style('fill','white');
//     d3.select("#reg_10")
//       .transition()
//       .duration(1000)
//       .style("fill", "#e67e00");
//     d3.select("#text_reg_10")
//       .mark("53% \uf0ab")
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','red');
//     d3.selectAll("#reg_8,#reg_9")
//       .transition()
//       .duration(1000)
//       .style("fill","#ffff00");
//     d3.selectAll("#text_reg_8,#text_reg_9")
//       .mark("65% \uf0aa")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','green');
//     d3.select("#reg_11")
//       .transition()
//       .duration(1000)
//       .style("fill","#d80000");
//     d3.select("#text_reg_11")
//       .mark("22% \uf0ab")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','red');
//     d3.select("#reg_12")
//       .transition()
//       .duration(1000)
//       .style("fill","#d80000");
//     d3.select("#text_reg_12")
//       .mark("17% \uf0aa")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','green');

//   }
// //*******************
//  /* KPI : NPS */
// //********************
// function changeColor2(){
//     d3.selectAll("#reg_1,#reg_3,#reg_4,#reg_5,#reg_6,#reg_7")
//       .transition()
//       .duration(1000)
//       .style("fill", "#ffff00");
//     d3.selectAll("#text_reg_1,#text_reg_3,#text_reg_4,#text_reg_5,#text_reg_6,#text_reg_7")
//       .text("70%\uf0ab")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','red');
//     d3.select("#reg_2")
//       .transition()
//       .duration(1000)
//       .style("fill", "#00b100");
//     d3.select("#text_reg_2")
//       .text("95%")
//       .style('fill','white');
//     d3.select("#reg_10")
//       .transition()
//       .duration(1000)
//       .style("fill", "#e67e00");
//     d3.select("#text_reg_10")
//       .text("53%\uf0aa")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','green');
//     d3.selectAll("#reg_8,#reg_9")
//       .transition()
//       .duration(1000)
//       .style("fill","#d80000");
//     d3.selectAll("#text_reg_8,#text_reg_9")
//       .text("10%\uf0aa")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','green');
//     d3.select("#reg_11")
//       .transition()
//       .duration(1000)
//       .style("fill","#e67e00");
//     d3.select("#text_reg_11")
//       .text("47%")
//       .style('fill','white');
//     d3.select("#reg_12")
//       .transition()
//       .duration(1000)
//       .style("fill","#e67e00");
//     d3.select("#text_reg_12")
//       .text("59%\uf0ab")//arrow up \uf0ab arrow down
//       .attr("class",'fas fa-arrow-circle-up')
//       .attr('font-family', 'FontAwesome')
//       .attr('font-size', '20px')
//       .style('fill','red');

//   }
// //*********************
//  /* KPI : CSAT */
// //********************
// function changeColor3(){
//     d3.selectAll("#reg_1,#reg_3,#reg_4,#reg_5,#reg_6,#reg_7")
//       .transition()
//       .duration(1000)
//       .style("fill", "#d80000");
//     d3.selectAll("#text_reg_1,#text_reg_3,#text_reg_4,#text_reg_5,#text_reg_6,#text_reg_7")
//       .text("20%")
//       .style('fill','white');
//     d3.select("#reg_2")
//       .transition()
//       .duration(1000)
//       .style("fill", "#ffff00");
//     d3.select("#text_reg_2")
//       .text("69%")
//       .style('fill','blue');
//     d3.select("#reg_10")
//       .transition()
//       .duration(1000)
//       .style("fill", "#00b100");
//     d3.select("#text_reg_10")
//       .text("80%")
//       .style('fill','white');
//     d3.selectAll("#reg_8,#reg_9")
//       .transition()
//       .duration(1000)
//       .style("fill","#e67e00");
//     d3.selectAll("#text_reg_8,#text_reg_9")
//       .text("59%")
//       .style('fill','white');
//     d3.select("#reg_11")
//       .transition()
//       .duration(1000)
//       .style("fill","#00b100");
//     d3.select("#text_reg_11")
//       .text("88%")
//       .style('fill','white');
//     d3.select("#reg_12")
//       .transition()
//       .duration(1000)
//       .style("fill","#00b100");
//     d3.select("#text_reg_12")
//       .text("90%")
//       .style('fill','white');

//   }
// //\\******************

// // legend

// var w= 350;
// var h= 100;
// //Append a defs (for definition) element to your SVG
// var colorScale = d3.scaleLinear()
//     .domain([0, 25, 50, 75, 100])
//     .range(["white","#ff4d50","#ffe49a","orange","#84ff00"]);
// /*var svgLegend = d3.select('body').append('svg')
//     .attr("width",width);*/
// var svg_map = d3.select("#map").append('svg').attr("width",w).attr('height',h);
// var defs = svg_map.append("defs");
// //Append a linearGradient element to the defs and give it a unique id
// var linearGradient = defs.append("linearGradient")
//     .attr("id", "linear-gradient");

// //Horizontal gradient
// linearGradient
//     .attr("x1", "0%")
//     .attr("y1", "0%")
//     .attr("x2", "100%")
//     .attr("y2", "0%");

// linearGradient.selectAll("stop")
//   .data([
//     {offset: "0%", color: "white"},
//     {offset: "25%", color: "#ff4d50"},
//     {offset: "50%", color: "#ffe49a"},
//     {offset: "75%", color: "orange"},
//     {offset: "100%", color: "#84ff00"}
//   ])
//   .enter().append("stop")
//   .attr("offset", function(d) { 
//     return d.offset; 
//   }).style('fill','black')
//   .attr("stop-color", function(d) { 
//     return d.color; 
//   });

// // append title
// svg_map.append("text")
//   .attr("class", "legendTitle")
//   .attr("x", 0)
//   .attr("y", 50)
//   .style("text-anchor", "left")
//   .style("fill","black")
//   .style('font-style','bold')
//   .style('font-size',"20px")
//   .text("Regional Focus");

// // draw the rectangle and fill with gradient
// svg_map.append("rect")
//   .attr("x", 10)
//   .attr("y", 60)
//   .attr("width", 300)
//   .attr("height", 15)
//   .style("fill", "url(#linear-gradient)");

// //create tick marks
// var xLeg = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0, 300]);

// var axisLeg = d3.axisBottom(xLeg)
//   .tickValues(colorScale.domain())

// svg_map
//   .attr("class", "axis")
//   .append("g")
//   .attr("transform", "translate(7, 60)")
//   .call(axisLeg);

// //***************
//  // Zoom
// //***************

// var svg_zoom= d3.select("#svg_map").append('svg').attr("width",w).attr('height',h);
// //define zoom behaviour 
// var zoom_handler = d3.zoom().on("zoom", zoom_actions);


// zoom_handler(svg_zoom);

// function zoom_actions(){
//  var transform = d3.zoomTransform(this);
//  // same as  this.setAttribute("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
//  this.setAttribute("transform", transform)
// }



