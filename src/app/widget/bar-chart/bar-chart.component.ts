import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
Highcharts = Highcharts;
  //chartOptions : {};

     chartOptions: Highcharts.Options = {
  series: [{
      data: [1, 2, 3],
      type: 'bar'
    }]
  };
  
/*
public option: any = {   
  data: {
    table: 'datatable'
},
chart: {
    type: 'line'
},


yAxis: {
  title: {
      text: 'Number of Employees'
  }
},

xAxis: {
  accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
  }
},

plotOptions: {
  series: {
      label: {
          connectorAllowed: false
      },
      pointStart: 2010
  }
},

series: [{
  name: 'Installation',
  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
}, ],
responsive: {
  rules: [{
      condition: {
          maxWidth: 500
      },
      chartOptions: {
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
          }
      }
  }]
}
}
*/

  constructor() { }

  ngOnInit(): void {
	  //  Highcharts.chart('container', this.option); 
  }

}
