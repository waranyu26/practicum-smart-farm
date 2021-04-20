import React, { useState, useEffect } from 'react';
import { SHORT_STATUS, STATUS_DETAIL } from '../lib/constants';
import { formatStatusIndex } from "../lib/statusFormat";
import { setTimeInterval } from "../lib/api";
import ProgressBar from "./progress-bar"
import { Slider, Tooltip, Button, notification } from 'antd';
import 'antd/dist/antd.css';

const openNotification = (title, interval, isCompleted) => {
  const args = {
    message: isCompleted ? `${title} Successfully Updated` : `${title} Failed to Update`,
    description:
      isCompleted ?
        `good interval has been set to range ${interval[0]} to ${interval[1]}.` : `failed to up date new interval due to connection problem.`,
    duration: 5,
    placement: 'bottomRight',
    style: {
      width: 500,
    }
  };
  notification.info(args);
};

const Card = ({ title, level, unit, goodInterval }) => {
  const statusId = formatStatusIndex(level, goodInterval)
  const [range, setRange] = useState(goodInterval)

  const [marks, setMarks] = useState({
    0: `0${unit}`,
    [goodInterval[0]]: `${goodInterval[0]}${unit}`,
    [goodInterval[1]]: `${goodInterval[1]}${unit}`,
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100{unit}</strong>,
    },
  })

  useEffect(() => {
    setRange(goodInterval)
    const newMarks = {
      0: `0${unit}`,
      [goodInterval[0]]: `${goodInterval[0]}${unit}`,
      [goodInterval[1]]: `${goodInterval[1]}${unit}`,
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100{unit}</strong>,
      },
    }
    setMarks(newMarks)
  }, [goodInterval]);

  const handleSlider = (value) => {
    setRange(value);
  };

  const handleSubmit = async () => {
    const newMarks = {
      0: `0${unit}`,
      [range[0]]: `${range[0]}${unit}`,
      [range[1]]: `${range[1]}${unit}`,
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100{unit}</strong>,
      },
    }
    setMarks(newMarks);
    const response = await setTimeInterval(title.toLowerCase() === 'temperature', range);
    openNotification(title, range, response !== -1);
  }

  return (
    <div className="p-4 lg:w-1/2 w-full">
      <div className="bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-4 mb-10">
          <p className="text-gray-600 text-lg mb-10">The {title.toLowerCase()} level is about {level}{unit}</p>
          <ProgressBar statusId={statusId} level={level} unit={unit} />
        </div>
        <h2 className="text-md uppercase">Current status:</h2>
        <h3 className="tracking-wide text-2xl">
          {SHORT_STATUS[statusId]}
        </h3>
        <h3 className="tracking-wide text-md">
          The {title} is {STATUS_DETAIL[statusId]}
        </h3>
        <div className="px-10 mt-10">
          <Slider range marks={marks} defaultValue={[range[0], range[1]]} onChange={handleSlider} value={range} />
          <Tooltip title="Apply new good interval" className="mt-10">
            <Button onClick={handleSubmit} >SUBMIT CHANGE</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Card
