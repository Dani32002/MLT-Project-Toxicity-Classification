import { Tooltip } from "react-bootstrap";
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BarGraph({ data }) {
    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Class" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey=
            </BarChart>
        </ResponsiveContainer>
    )
}