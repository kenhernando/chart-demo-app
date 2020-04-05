import { Component, OnInit, ElementRef, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';

import * as d3 from 'd3';

export class DonutChartDatum {
    code: string;
    displayValue: string;
    count: number;
}

@Component({
    selector: 'app-dt-donut-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dt-donut-chart.component.html',
    styleUrls: ['./dt-donut-chart.component.scss']
})
export class DtDonutChartComponent implements OnInit, OnChanges {

    @Input() inputParams: {};
    @Input() color: string;
    hostElement; // Native element hosting the SVG container
    svg; // Top level SVG element
    g; // SVG Group element
    arc; // D3 Arc generator
    innerRadius; // Inner radius of donut chart
    radius; // Outer radius of donut chart
    slices; // Donut chart slice elements
    labels; // SVG data label elements
    totalLabel; // SVG label for total
    rawData; // Raw chart values array
    total: number; // Total of chart values
    colorScale; // D3 color provider
    pieData: any; // Arc segment parameters for current data set
    pieDataPrevious: any; // Arc segment parameters for previous data set - used for transitions
    // colors = d3.scaleOrdinal(d3.schemeCategory10);

    // Pie function - transforms raw data to arc segment parameters
    pie = d3.pie()
        .value((d: number) => d);

    constructor(private elRef: ElementRef) {
        this.hostElement = this.elRef.nativeElement;
    }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.inputParams) {
            this.createChart(changes.inputParams.currentValue);
        }
    }

    private createChart(inputParams) {

        this.processPieData(inputParams.chartData);

        this.removeExistingChartFromParent();

        this.setChartDimensions();

        this.setColorScale(inputParams);

        this.addGraphicsElement();

        this.setupArcGenerator(inputParams);

        this.addSlicesToTheDonut();

        this.addLabelsToTheDonut();

    }


    private setChartDimensions() {
        let viewBoxHeight = 200;
        let viewBoxWidth = 200;
        this.svg = d3.select(this.hostElement).append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight);
    }

    private addGraphicsElement() {
        this.g = this.svg.append("g")
            .attr("transform", "translate(100,90)");
    }

    private setColorScale(inputParams) {
        this.colorScale = d3.scaleOrdinal().domain(inputParams.chartData).range(inputParams.color);
    }

    private processPieData(data, initial = true) {
        this.rawData = data;
        this.total = this.rawData.reduce((sum, next) => sum + next, 0);

        this.pieData = this.pie(data);
        if (initial) {
            this.pieDataPrevious = this.pieData;
        }
    }


    private setupArcGenerator(inputParams) {
        this.innerRadius = inputParams.isDonut ? 50 : 0;
        this.radius = 80;
        this.arc = d3.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.radius);
    }

    private addSlicesToTheDonut() {
        this.slices = this.g.selectAll('allSlices')
            .data(this.pieData)
            .enter()
            .append('path')
            .attr('d', this.arc)
            .attr('fill', (datum, index) => {
                return this.colorScale(`${index}`);
            })
            .style('stroke', 'white')
            .style('stroke-width', '0.5px')
            .style('opacity', 1);
    }

    private removeExistingChartFromParent() {
        d3.select(this.hostElement).select('svg').remove();
    }

    private addLabelsToTheDonut() {
        this.labels = this.g
            .selectAll('allLabels')
            .data(this.pieData)
            .enter()
            .append('text')
            .text(this.labelValueGetter)
            .attr('transform', (datum, index) => {
                return 'translate(' + this.arc.centroid(datum) + ')';
            })
            .style('font-size', '8px')
            .style('text-anchor', 'middle');

    }

    private labelValueGetter = (datum, index) => {
        return this.labelValueFn(this.rawData[index]);
    }

    private labelValueFn(val) {
        const pct = Math.floor(val * 100 / this.total);
        return (pct < 4) ? '' : '' + val;
    }
}
