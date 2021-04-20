import { Progress } from 'antd';
import 'antd/dist/antd.css';

const ProgressBar = ({ statusId, level, unit }) => {
  const color = (statusId) => {
    if (statusId === 3) {
      return ['#108ee9', '#87d068'];
    }
    else if (statusId < 3) {
      return ['#292E49', '#BBD2C5'];
    }
    else if (statusId > 3) {
      return ['#f12711', '#f5af19']
    }
  }
  return (
    <>
      { statusId !== 0 ?
        <Progress type="circle" format={percent => `${percent}${unit}`} strokeColor={{
          '0%': color(statusId)[0],
          '100%': color(statusId)[1],
        }} percent={level} width={200} /> :
        <Progress type="circle" percent={100} width={200} status="exception" />}
    </>
  );
}

export default ProgressBar;