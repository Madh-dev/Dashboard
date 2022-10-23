import React from 'react'
import Chart from 'react-apexcharts'
const CustomerReview = () => {



    const data = {
        series: [
            {
                name: 'Review',
                data: [10,50,30,90,40,120,100],
            }
        ],
        options: {
          chart: {
            type: 'area',
            height: 'auto',
          },
          fill: {
            colors: ["#ff929f"],
            type: 'gradient',
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            colors: ['#ff929f'],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: 'datetime',
            categories: [
              '2022-10-23T00:00:00:000Z',
              '2022-10-23T01:30:00:000Z',
              '2022-10-23T02:30:00:000Z',
              '2022-10-23T03:30:00:000Z',
              '2022-10-23T04:30:00:000Z',
              '2022-10-23T05:30:00:000Z',
              '2022-10-23T06:30:00:000Z',
            ],
          },
          yaxis:{
            show: false
          },
          toolbar:{
            show:false
          }
        },
      };

  return (
    <div className='CustomerReview'>
    <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview