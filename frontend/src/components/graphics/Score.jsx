import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import './graphics.css';

export default function Score(props) {

    const { score } = props;
    const todayScore = score.todayScore || score.score;

    const pieData = [
        { name: "completed", value: todayScore, fillColor: `#E60000` },
        { name: "not-completed", value: 1 - todayScore, fillColor: "#fff" },
    ];

    return (
        <div className='score'>
            <div className="top">
                <h2>Score</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={pieData} innerRadius={70} outerRadius={80} startAngle={90} endAngle={450}>
                        {pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                        />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className='score-label'>
                <span>
                    {`${100 * todayScore }%`}
                    <span>de votre objectif</span>
                </span>
            </div>
        </div>
      );
}

Score.propTypes = {
    score: PropTypes.shape({
        keyData: PropTypes.object
    }).isRequired
  };