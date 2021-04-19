import React from 'react'
import Card from './card'

const Body = ({ children }) => {
  return <div className="flex flex-wrap">
    <Card title="Temperature" level={10} statusId={1} />
    <Card title="Humidity" level={20} statusId={2} />
  </div>
}

export default Body
