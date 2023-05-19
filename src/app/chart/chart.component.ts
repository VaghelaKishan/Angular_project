import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chart,  registerables } from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  {
  public chart: Chart | any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchDailyUserCountData();
  }

  fetchDailyUserCountData() {
    this.http.get<number[]>('https://localhost:7249/api/User/user/RegisterUserCount').subscribe(data => {
      const labels: any[] = [];
      const counts: any[] = [];
  
      data.forEach((count, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - index));
        const formattedDate = date.toISOString().split('T')[0];
        const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
        const label = `${dayName} (${formattedDate})`;
        labels.push(label);
        counts.push(count);
      });
  
      this.createChart(labels, counts);
    });
  }

  createChart(labels: any[], counts: any[]) {
    const canvas: HTMLCanvasElement = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D |any = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Registered Users',
            data: ['1', '2', '5', '7', '5', '8', '12'],
            // data: counts,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
