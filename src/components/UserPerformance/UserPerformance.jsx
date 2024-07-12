import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./radarChart.scss";
import ChartDataFormatter from '../../services/classe'; 

const kind = [ 'Cardio','Énergie','Endurance','Force', 'Vitesse','Intensité'];

function UserPerformance({ performanceData }) {
  console.log('Received performanceData:', performanceData);

  if (!performanceData || !performanceData.data || performanceData.data.length === 0) {
    return <p>Aucune donnée de performance disponible.</p>;
  }


  const reversedChartData = ChartDataFormatter.formatPerformanceData(performanceData.data, kind);

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
UserPerformance.propTypes = {
  performanceData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default UserPerformance;
