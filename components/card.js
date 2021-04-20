import React from 'react';
import { SHORT_STATUS, STATUS_DETAIL } from '../lib/constants';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import { formatStatusIndex } from "../lib/statusFormat";

const Card = ({ title, level, unit, goodInterval }) => {
  const statusId = formatStatusIndex(level, goodInterval)
  return (
    <div className="p-4 lg:w-1/2 w-full">
      <div className="bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-4 mb-10">
          <p className="text-gray-600 text-lg mb-10">The {title.toLowerCase()} level is about {level}{unit}</p>
          {statusId != 0 ?
            <Progress type="circle" format={percent => `${percent}${unit}`} strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }} percent={level} width={200} /> :
            <Progress type="circle" percent={100} width={200} status="exception" />}
        </div>
        <h2 className="text-md uppercase">Current status:</h2>
        <h3 className="tracking-wide text-2xl">
          {SHORT_STATUS[statusId]}
        </h3>
        <h3 className="tracking-wide text-md">
          The {title} is {STATUS_DETAIL[statusId]}
        </h3>
      </div>
    </div>
  );
}

export default Card
