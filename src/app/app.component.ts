import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import "chartjs-plugin-labels";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: "true",
      position: "right",
      align: "center"
    },
    title: {
      text: "Idea Status",
      display: true,
      fontSize: 20,
      fontColor: "green",
      align: "center"
    },
    plugins: {
      labels: [
        {
          render: "percentage",
          fontColor: ["red", "red", "red", "red"],
          position: "outside"
        }
      ]
    }
  };
  public chartColors2: Array<any> = [
    {
      backgroundColor: ["red", "blue", "green", "yellow"],
      hoverBackgroundColor: ["#92c0fc", "#fff68a", "#cbffa8", "#a6fffe"],
      borderWidth: 2
    }
  ];
  public pieChartLabels: Label[] = [
    "In Progress",
    "To be Started",
    "Not Started",
    "Completed"
  ];
  public pieChartData: SingleDataSet = [41, 22, 4, 69];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //barchart
  public barChartType: ChartType = "bar";
  public chartData1: SingleDataSet = [69, 6, 36, 3, 23];
  public chartLables1: Label[] = [
    "Automate",
    "Eliminate",
    "Enable",
    "ReUse",
    "blank"
  ];
  public barChartLegend = false;
  public barChartPlugins = [];
  public barchartColors1: Array<any> = [
    {
      backgroundColor: ["red", "blue", "green", "yellow", "pink"],
      hoverBackgroundColor: ["#92c0fc", "#fff68a", "#cbffa8", "#a6fffe"],
      borderWidth: 2
    }
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Idea of Category"
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            offsetGridLines: true
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 80,
            stepSize: 10
          }
        }
      ]
    },
    plugins: {
      labels: [
        {
          render: "value",
          fontColor: ["red", "red", "red", "red", "red"],
          position: "center",
          align: "center"
        }
      ]
    }
  };

  public chartData2: SingleDataSet = [20, 8, 77, 27, 5];
  public chartLables2: Label[] = ['Atlanta', 'Canada', 'Hyderabad', 'Gurgaon', 'Pune']

  public barchartColors2: Array<any> = [
    {
      backgroundColor: ["red", "blue", "green", "yellow", "pink"],
      hoverBackgroundColor: ["#92c0fc", "#fff68a", "#cbffa8", "#a6fffe"],
      borderWidth: 2
    }
  ];

  public barChartOptions2: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Locationwise Ideas",
      fontSize:15,
      fontColor:"green"
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            offsetGridLines: false
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 90,
            stepSize: 10
          }
        }
      ]
    },
    plugins: {
      labels: [
        {
          render: "value",
          fontColor: ["red", "red", "red", "red", "red"],
          position: "center",
          align: "center"
        }
      ]
    }
  };

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}
}
