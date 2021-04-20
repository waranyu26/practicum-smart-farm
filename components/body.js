import React from 'react'
import Card from './card'
import CardAlarm from './card-alarm'
// import Chart from './chart'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('./chart'))

const Body = ({ children }) => {
  return <div className="flex flex-wrap">
    <Card title="Temperature" level={10} statusId={0} />
    <Card title="Humidity" level={20} statusId={2} />
    <CardAlarm />
    <Chart />
  </div>
}

export default Body
