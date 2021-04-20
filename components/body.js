import React, { useEffect, useRef, useState } from 'react'
import Card from './card'
import CardAlarm from './card-alarm'
import axios from 'axios';
import { fetchData } from '../lib/api'

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
  const [intervalTime, setIntervalTime] = useState(2000);

  useInterval(async () => {
    const res = await fetchData();
    setData(res)
    setTimeout(() => {
    }, 500);
  }, intervalTime);

  return <div className="flex flex-wrap">
    <Card title="Temperature" level={data[0]} unit="°C" goodInterval={[20, 30]} outerRange={5} />
    <Card title="Humidity" level={data[1]} unit="%" goodInterval={[36, 70]} outerRange={10} />
    <CardAlarm />
  </div>
}

export default Body
