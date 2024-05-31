import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './radialBarChart.scss';

const UserScoreRadialBarChart = ({ score }) => {
    const data = [
        {
            name: 'Score',
            value: score,
            fill: '#FF0000',
        },
    ];

    const centerText = `${score}%`;

    return (
        <div className="radial-bar-chart-container">
            <div className="chart-title-container">
                <h2 className="chart-title">Score</h2>
            </div>
            <div className="chart-content">
                <ResponsiveContainer width="100%" height={250}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="70%"
                        barSize={12}
                        data={data}
                        startAngle={90}
                        endAngle={450}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            minAngle={15}
                            background
                            clockWise
                            dataKey="value"
                            cornerRadius={5}
                        />
                        <text
                            y="50%"
                        >
                            <tspan x="40%" dy="0" fill="#282D30" fontSize="24px" fontWeight="700">{centerText}</tspan>
                            <tspan x="75" dy="1.5em" fill="#74798C" fontSize="14px">de votre objectif</tspan>
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default UserScoreRadialBarChart;