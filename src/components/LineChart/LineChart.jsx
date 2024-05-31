import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./lineChart.scss";

function UserSessionDuration({ userSessions }) {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const chartData = userSessions.map((session, index) => ({
    day: daysOfWeek[index],
    sessionLength: session.sessionLength
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p className='line-tooltip-text'>{payload[0].value}min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='session-duration'>
      <h3 className='line-barchart-title'>Durée moyenne des sessions</h3>
      <LineChart
        width={258}
        height={165}
        data={chartData}
        margin={{
          top: 10,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <XAxis 
          type="category"
          dataKey="day"
          tickLine={true}
          stroke="#FF0000"
          padding={{ right: 10, left: 10 }}
          tick={{ fontSize: 13, fill: "white", opacity: 0.7 }} 
        />
        <YAxis 
          dataKey="sessionLength"
          domain={[20]}
          hide={true} 
        />
        <Tooltip 
          content={CustomTooltip} 
          wrapperStyle={{ backgroundColor: "white", padding: '0px 5px', outline: 'none' }} 
        />
        <Line 
          type="natural"
          dataKey="sessionLength"
          strokeWidth={2}
          dot={false}
          stroke="rgba(255, 255, 255, 0.7)"
          activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }} 
        />
      </LineChart>
    </div>
  );
}

export default UserSessionDuration;
