import React from "react";
import Chart from "react-apexcharts";

function AreaChart() {
  const lineChartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
  };

  return (
    <div id="area-chart">
      <Chart
        options={lineChartOptions.options}
        series={lineChartOptions.series}
        type="line"
        width="500"
      />
    </div>
  );
}

export default AreaChart;
