import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-piechart',
  standalone: true,
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  public chart: any;

  sampleChartData = {
    labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    data: [1, 2, 3, 4, 5]
  };


  constructor(private httpService: HttpService) { }


  getData() {

    this.httpService.getData().subscribe(data => {
      this.createChart(data);
    });

    this.httpService.postData({}).subscribe(data => {
      this.createChart(data);
    });
  }

  postData() {

    this.httpService.postData({}).subscribe(data => {
      this.createChart(data);
    });
  }

  ngOnInit(): void {
    this.createChart(this.sampleChartData);
  }



  createChart(data: any) {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [
          { data: data.data}
      ]
      },
      options: {
        aspectRatio: 2.5,
        layout: {
          padding: 20
        },
        plugins: {
          title: {
            display: true,
            text: 'Classificação',
            color: 'white',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: true,
            position: 'left',
            align: 'start',
            labels: {
              color: 'white',
              font: {
                weight: 'bold',
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          }
        }
      }
    });
  }
}
