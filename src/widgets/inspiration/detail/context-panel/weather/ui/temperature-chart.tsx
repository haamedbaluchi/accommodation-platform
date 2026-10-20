import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface ChartDataPoint {
  time: string;
  temp: number;
}

interface TemperatureChartProps {
  data: ChartDataPoint[];
}

export const TemperatureChart: React.FC<TemperatureChartProps> = ({ data }) => {
  return (
    <div className="w-full h-48 bg-white rounded-2xl p-4 shadow-sm dir-rtl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#9ca3af' }}
            dy={10}
          />
          <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number) => [`${value}°C`, 'دما']}
          />
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Line 
            type="monotone" 
            dataKey="temp" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
          />
          {/* برای پر کردن زیر نمودار مثل عکس، بهتر است از AreaChart استفاده کنید، اما با LineChart هم میشه شبیه سازی کرد */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};