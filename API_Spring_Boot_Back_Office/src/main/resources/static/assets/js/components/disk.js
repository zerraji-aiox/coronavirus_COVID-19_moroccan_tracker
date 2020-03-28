

    var arcColorFn2 = d3.scaleOrdinal(['red','orange']);
    var arcColorFn1 = d3.scaleOrdinal(['yellow','green']);

    const widthSun = window.innerWidth,
      heightSun = window.innerHeight,
      maxRadius = (Math.min(widthSun, heightSun) / 2) - 5;

    const formatNumber = d3.format(',d');

    const x_disk = d3.scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

    const y_disk = d3.scaleSqrt()
      .range([maxRadius * .1, maxRadius]);

    //const color = d3.scaleOrdinal(d3.schemeCategory20);

    const partition = d3.partition();

    const arc = d3.arc()
      .startAngle(d => x_disk(d.x0))
      .endAngle(d => x_disk(d.x1))
      .innerRadius(d => Math.max(0, y_disk(d.y0)))
      .outerRadius(d => Math.max(0, y_disk(d.y1)));

    const middleArcLine = d => {
      const halfPi = Math.PI / 2;
      const angles = [x_disk(d.x0) - halfPi, x_disk(d.x1) - halfPi];
      const r = Math.max(0, (y_disk(d.y0) + y_disk(d.y1)) / 2);

      const middleAngle = (angles[1] + angles[0]) / 2;
      const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
      if (invertDirection) { angles.reverse(); }

      const path = d3.path();
      path.arc(0, 0, r, angles[0], angles[1], invertDirection);
      return path.toString();
    };

    const textFits = d => {
      const CHAR_SPACE = 4;

      const deltaAngle = x_disk(d.x1) - x_disk(d.x0);
      const r = Math.max(0, (y_disk(d.y0) + y_disk(d.y1)) / 2);
      const perimeter = r * deltaAngle;

      return d.data.name.length * CHAR_SPACE < perimeter;
    };


    const svg_disk = d3.select('#sunburst').append('svg')
      .attr("viewBox", "-500 -400 1000 800")
      .attr("preserveAspectRatio", "xMidYMid meet")		  
      // .style('width', '100%')
      // .style('height', '100%')
      // .attr('viewBox', `${-widthSun / 2} ${-heightSun / 2} ${widthSun} ${heightSun}`)
      .on('click', () => focusOn()); // Reset zoom on canvas click



    function change() {

      const slice = svg_disk.selectAll('g.slice')
        .data(partition(root).descendants());

      slice.exit().remove();

      const newSlice = slice.enter()
        .append('g').attr('class', 'slice')
        .on('click', d => {
          d3.event.stopPropagation();
          focusOn(d);
        });


      newSlice.append('path')
        .attr('class', 'main-arc')
        .style('fill', d => (d.data.polarity >= 0 ? arcColorFn1(d.data.polarity / 100) :
          d.data.polarity < 0 ? arcColorFn2((-1) * d.data.polarity) : (d.parent && d.data.total_polarity >= 0) ? arcColorFn1(d.data.total_polarity / 100)
            : (d.parent && d.data.total_polarity < 0) ? arcColorFn2((-1) * d.data.total_polarity) : 'white'))
        .attr('d', arc)

        ;

      newSlice.append('path')
        .attr('class', 'hidden-arc')
        .attr('id', (_, i) => `hiddenArc${i}`)
        .attr('d', middleArcLine)


        ;

      const text = newSlice.append('text')
        .attr('display', d => textFits(d) ? null : 'none');

      // Add white contour
      text.append('textPath')
        .attr('startOffset', '50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
        .text(d => d.data.name)
        .style('fill', 'none')
        .style('stroke', '#fff')
        .style('stroke-width', 5)
        .style('stroke-linejoin', 'round');

      text.append('textPath')
        .attr('startOffset', '50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
        .text(d => d.data.name);


      function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
        // Reset to top-level if no data point specified

        const transition = svg_disk.transition()
          .duration(750)
          .tween('scale', () => {
            const xd = d3.interpolate(x_disk.domain(), [d.x0, d.x1]),
              yd = d3.interpolate(y_disk.domain(), [d.y0, 1]);
            return t => { x_disk.domain(xd(t)); y_disk.domain(yd(t)); };
          });

        transition.selectAll('path.main-arc')
          .attrTween('d', d => () => arc(d))


          ;

        transition.selectAll('path.hidden-arc')
          .attrTween('d', d => () => middleArcLine(d))
          ;

        transition.selectAll('text')
          .attrTween('display', d => () => textFits(d) ? null : 'none');

        moveStackToFront(d);

        //

        function moveStackToFront(elD) {
          svg_disk.selectAll('.slice').filter(d => d === elD)
            .each(function (d) {
              this.parentNode.appendChild(this);
              if (d.parent) { moveStackToFront(d.parent); }
            })
        }
      }
    }


    root = sunburst_frequence
    root = d3.hierarchy(root);
    root.sum(d => Math.abs(d.size))
    change()



/*
    d3.select("button#b")
      .on("click", function () {
        svg_disk.selectAll("*").remove()
        root = sunburst_frequence
        root = d3.hierarchy(root);
        root.sum(d => Math.abs(d.size))
        change();
      })


    d3.select("button#c")
      .on("click", function () {
        svg_disk.selectAll("*").remove()
        root = sunburst_polarity
        root = d3.hierarchy(root);
        root.sum(d => Math.abs(d.size))
        change();
      })

*/