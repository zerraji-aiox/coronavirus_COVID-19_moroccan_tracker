// set the dimensions and margins of the graph
var margin = { top: 90, right: 60, bottom: 90, left: 150 },
    width = 700 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
    .select('#my_dataviz')
    .append('svg')
    .attr('viewBox', '-10 0 710 600')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    // .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//max & mix frequence and polarity to define more precisely the domain

var i;
var maxx = dataset_bubble[0].polarity;
for (i = 0; i < dataset_bubble.length; i++) {
    if (dataset_bubble[i].polarity > maxx) {
        maxx = dataset_bubble[i].polarity;
    }
}

var i;
var minx = dataset_bubble[0].polarity;
for (i = 0; i < dataset_bubble.length; i++) {
    if (dataset_bubble[i].polarity < minx) {
        minx = dataset_bubble[i].polarity;
    }
}

// Add X axis
var x = d3
    .scaleLinear()
    .domain([minx - 5, maxx + 5])
    .range([width - 1, -100]);
svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));
// .attr('fill', '#66a3ff');

var i;
var maxy = dataset_bubble[0].frequence;
for (i = 0; i < dataset_bubble.length; i++) {
    if (dataset_bubble[i].frequence > maxy) {
        maxy = dataset_bubble[i].frequence;
    }
}

// Add Y axis
var y = d3
    .scaleLinear()
    .domain([0, maxy + 5])
    .range([height, 0]);

svg.append('g')
    .call(d3.axisLeft(y))
    .attr('transform', 'translate(' + x(0) + ',' + 0 + ')');
// .attr('fill', '#66a3ff');

// Add a scale for bubble size
var z = d3
    .scaleLinear()
    .domain([0, 90])
    .range([1, 40]);
//var arcColorFn2 = d3.interpolateHsl(d3.rgb('lemonchiffon'), d3.rgb('red'));
//var arcColorFn1 = d3.interpolateHsl(d3.rgb("#f4e153"), d3.rgb('aqua'));
//var color = d3.scaleOrdinal(d3.schemeCategory20);

//add dashed lines on x = -50, x=50, y=50

svg.append('line')
    .style('stroke', '#b3d1ff')
    .style('stroke-width', 2)
    .style('stroke-dasharray', '3,3')
    .attr('x1', x(minx - 5))
    .attr('y1', y(maxy / 2))
    .attr('x2', x(maxx + 5))
    .attr('y2', y(maxy / 2));

svg.append('line')
    .style('stroke', '#b3d1ff')
    .style('stroke-width', 2)
    .style('stroke-dasharray', '3,3')
    .attr('x1', x(50))
    .attr('y1', y(0))
    .attr('x2', x(50))
    .attr('y2', y(maxy + 5));

svg.append('line')
    .style('stroke', '#b3d1ff')
    .style('stroke-width', 2)
    .style('stroke-dasharray', '3,3')
    .attr('x1', x(-50))
    .attr('y1', y(0))
    .attr('x2', x(-50))
    .attr('y2', y(maxy + 5));

// Add dots
var dots = svg
    .append('g')
    .selectAll('dot')
    .data(dataset_bubble)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return x(d.polarity);
    })
    .attr('cy', function(d) {
        return y(d.frequence);
    })
    .attr('r', function(d) {
        return z(d.score) * 3;
    })
    .style('opacity', '0.5')
    .attr('stroke', 'black')
    .style('fill', function(d, i) {
        if (d.polarity >= 50) {
            return 'green';
        } else if (d.polarity >= 0) {
            return 'yellow';
        } else if (d.polarity >= -50) {
            return 'orange';
        } else {
            return 'red';
        }
    });
// });
//add labels of dots
var text = svg
    .append('g')
    .attr('class', 'labels')
    .selectAll('text')
    .data(dataset_bubble)
    .enter()
    .append('text')
    .attr('dx', function(d) {
        if (d.polarity > 0) {
            return x(d.polarity) - d.polarity / 2 + 10;
        } else {
            return x(d.polarity) + d.polarity / 2 + 5;
        }
    })
    .attr('dy', function(d) {
        if (d.frequence > 20 && d.frequence <40) {
            return y(d.frequence) - d.frequence / 2 - 40;
        }
        if (d.frequence > 0) {
            return y(d.frequence) - d.frequence / 2 - 20;
        } else {
            return y(d.frequence) + d.frequence / 2 + 20;
        }
    })
    .text(function(d) {
        return d.topic + ' (' + d.polarity + ',' + d.frequence + ')';
    })
    .attr('font-weight', 'bold')
    .attr('font-size', function(d) {
        return 0.5 * z(d.score) + 6;
    });

dots.on('click', function(d) {
    alert(JSON.stringify(d));
});
//   text.on("click", function(d) {

//     alert(JSON.stringify(d))
// });
//

//Labels of axis and topic impact
svg.append('g')
    .attr('class', 'title')
    .append('text')
    .attr('dx', x((maxx + minx) / 2 + 10))
    .attr('dy', y(-10))
    .text('Polarity')
    .attr('font-size', 20)
    .attr('font-weight', 'bold');

svg.append('g')
    .attr('class', 'title')
    .append('text')
    .attr('dx', x(30))
    .attr('dy', y(maxy + 10))
    .text('Frequence topic')
    .attr('font-weight', 'bold')
    .attr('font-size', 20);

// svg.append('g')
//   .attr('class', 'title')
//   .append('text')
//   .attr('dx', x(maxx + 5))
//   .attr('dy', y(maxy + 10))
//   .text('Topic impact')
//   .attr('font-size', 30)
//   .attr('fill', '#66a3ff')
//   ;
