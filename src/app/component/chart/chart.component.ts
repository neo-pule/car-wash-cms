import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../../widget/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../widget/line-chart/line-chart.component';
import { PieChartComponent } from '../../widget/pie-chart/pie-chart.component';
import { ColumChartComponent } from '../../widget/colum-chart/colum-chart.component';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private route: Router,private auth :AuthGuardService) { 
  this.auth.check_Auth();
  }

  profile(){
  this.route.navigateByUrl('/home/admin-profile')
}

  ngOnInit(): void {
	  this.auth.check_Auth();
  }

}
