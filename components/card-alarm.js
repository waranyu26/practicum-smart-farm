import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import { toggleAlarm } from '../lib/api'
import { Tooltip, Button, notification } from 'antd';
import 'antd/dist/antd.css';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const openNotification = (isCompleted, status) => {
  const args = {
    message: isCompleted ? `Alarm is now ${status}` : `Failed to set alarm`,
    description:
      isCompleted ?
        `Alarm has been set to ${status}.` : `failed to set alarm due to connection error.`,
    duration: 5,
    placement: 'bottomRight',
    style: {
      width: 500,
    }
  };
  notification.info(args);
};

const CardAlarm = ({ alarm, setAlarm }) => {

  const [alarmId, setAlarmId] = useState(alarm)

  const handleClick = (id) => {
    toggleAlarm(id);
    setAlarm(id);
  }

  useEffect(() => {
    setAlarmId(alarm)
  }, [alarm]);

  const CustomProgress = () => {
    if (alarmId === 0)
      return <Progress type="circle" percent={0} format={() => 'OFF'} width={200} />
    else if (alarmId === 1)
      return <Progress type="circle" percent={100} format={() => 'ON'} width={200} />
    else
      return <Progress type="circle" percent={0} format={() => 'UNSYNCED'} width={200} />
  }

  const CustomButton = () => {
    if (alarmId === 0)
      return <Button type="primary" icon={<CheckCircleOutlined />} className="lg:w-1/2 mx-auto w-full" size={'large'} onClick={() => handleClick(1)} >SET TO ON</Button>
    else if (alarmId === 1)
      return <Button type="primary" icon={<CloseCircleOutlined />} className="lg:w-1/2 mx-auto w-full" size={'large'} onClick={() => handleClick(0)} >SET TO OFF</Button>
    else
      return <Button type="primary" icon={<CheckCircleOutlined />} disabled className="lg:w-1/2 mx-auto w-full" size={'large'} onClick={() => handleClick(1)} >UNSYNCED</Button>
  }

  return (
    <div className="p-4 w-full mb-20">
      <div className="bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden">
        <h1 className="text-4xl font-bold">Alarm</h1>
        <div className="mt-4 mb-10">
          <p className="text-gray-600 text-lg mb-10 uppercase">CURRENT STATUS</p>
          <CustomProgress />
        </div>
        <h2 className="text-md uppercase"></h2>
        <div className="flex flex-col">
          <Tooltip title="Toggle alarm" className="mt-10">
            <CustomButton />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default CardAlarm
