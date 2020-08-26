import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
Highcharts = Highcharts;
//  chartOptions : {};
  
    chartOptions: Highcharts.Options = {
	   series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  };
  
 /* public options : any =  {
   chart: {
           type: 'pie'
       },
       title: {
           text: 'Total request made, 2020'
       },
       tooltip: {
           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
           pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               dataLabels: {
                   enabled: true,
                   format: '<b>{point.name}</b>: {point.percentage:.1f} %'
               }
           }
       },
       
       series: [{
           name: 'Request',
           colorByPoint: true,
           data:[{
             name : "ICT",
		   y : 45,
		   sliced : true,
		   selected : true},{
			 name : "aaa",
		   y : 45},{
			 name : "bb",
		   y : 451
           }]
         }]
   }; */
  constructor() { }

  ngOnInit(): void {
	//  Highcharts.chart('container', this.options);
  }

}
