import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./barChart.scss";

function UserActivity({ userSessionsActivity }) {
  // Définir les données pour le graphique à barres
  const chartData = userSessionsActivity.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories
  }));

  // Fonction pour personnaliser le Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className='custom-tooltip'>
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>

      );
    }

    return null;
  };

  

  return (
    <>
      <div className='barchart-container'>
      <h2 className='barchart-title'>Activité quotidienne</h2>
        <BarChart className='barChart' width={870} height={250} data={chartData} barGap={10} >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis yAxisId="day" dataKey="day" tick={{ fontSize: 14 }} dy={10} stroke="1" />
          <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14 }} dx={15} />
          <YAxis yAxisId="calories" dataKey="calories" type="number"  hide={true} />
          <Tooltip content={CustomTooltip}  />
          <Bar name={"Poids (kg)"} yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} radius={[50, 50, 0, 0]} />
          <Bar name={"Calories brûlées (kCal)"} yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} radius={[50, 50, 0, 0]} />
          <Legend
            wrapperStyle={{ fontSize: 16 }}
            verticalAlign="top"
            align="right"
            height={40}
            iconType="circle"
            iconSize={10}
          />
        </BarChart>
      </div>
    </>
  );
}

export default UserActivity;