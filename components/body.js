import React, { useEffect, useRef, useState } from 'react'
import Card from './card'
import CardAlarm from './card-alarm'
import { fetchData, fetchInterval, fetchAlarmStatus } from '../lib/api'

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Body = ({ children }) => {
  const [data, setData] = useState([0, 0])
  const [interval, setTimeInterval] = useState([[0, 100], [0, 100]])
  const [alarm, setAlarm] = useState(-1)
  const [intervalTime, setIntervalTime] = useState(2000);

  useInterval(async () => {
    const resData = await fetchData();
    const resInterval = await fetchInterval();
    const resAlarmStatus = await fetchAlarmStatus();

    if (resData.toString() !== data.toString())
      setData(resData);
    if (resInterval.toString() !== interval.toString())
      setTimeInterval(resInterval);
    if (resAlarmStatus.toString() !== alarm.toString())
      setAlarm(resAlarmStatus);

    setTimeout(() => {
    }, 500);
  }, intervalTime);

  return <div className="flex flex-wrap">
    <Card title="Temperature" level={data[0]} unit="°C" goodInterval={interval[0]} />
    <Card title="Humidity" level={data[1]} unit="%" goodInterval={interval[1]} />
    <CardAlarm alarm={alarm} setAlarm={setAlarm} />
  </div>
}

export default Body
