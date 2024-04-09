import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function SmallChart() {







  return (
    <ResponsiveContainer>
      <LineChart>
        <XAxis />
        <YAxis />
        <Line />
        <CartesianGrid />
      </LineChart>
    </ResponsiveContainer>
  )
}