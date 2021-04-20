import { Line } from 'react-chartjs-2'

const Chart = () => {
  return (
    <Line
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of votes',
            data: [12, 19, 20, 22, 52, 87]
          },
        ]
      }}
      height={500}
      width={1000}
      options={{
        maintainAspectRatio: false
      }}
    />
  )
};
export default Chart;