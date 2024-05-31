import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./radarChart.scss";

const kind = [ 'Cardio','Énergie','Endurance','Force', 'Vitesse','Intensité'];

function UserPerformance({ performanceData }) {
  console.log('Received performanceData:', performanceData);

  if (!performanceData || !performanceData.data || performanceData.data.length === 0) {
    return <p>Aucune donnée de performance disponible.</p>;
  }

  const chartData = performanceData.data.map(item => {
    const subject = kind[item.kind - 1];
    return {
      subject: subject,
      value: item.value
    };
  });

  const reversedChartData = chartData.reverse();

  return (
    <div className='radar-container'>
      <ResponsiveContainer>
        <RadarChart
          cx={130}
          cy={140}
          outerRadius={60}
          width={262}
          height={262} data={reversedChartData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tick={{ fill: '#fff',fontSize: 12 }}
            tickLine={false}
          />
          <Radar name="Performance" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserPerformance;
