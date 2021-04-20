import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const CardAlarm = ({ isOn }) => {
  return (
    <div className="p-4 w-full mb-20">
      <div className="bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden">
        <h1 className="text-4xl font-bold">Alarm</h1>
        <div className="mt-4 mb-10">
          <p className="text-gray-600 text-lg mb-10 uppercase">CURRENT STATUS</p>
          {
            isOn ?
              <Progress type="circle" percent={100} format={() => 'ON'} width={200} /> :
              <Progress type="circle" percent={0} format={() => 'OFF'} width={200} />
          }
        </div>
        <h2 className="text-md uppercase"></h2>
        <div className="flex flex-col">
          <button class="relative text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg lg:w-1/2 mx-auto mb-4 rounded">Toggle Alarm ON</button>
          <button class="relative text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg lg:w-1/2 mx-auto mb-4 rounded">Toggle Alarm OFF</button>
        </div>
      </div>
    </div>
  );
}

export default CardAlarm
