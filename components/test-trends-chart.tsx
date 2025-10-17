"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { date: "Jan 1", passed: 245, failed: 12, flaky: 8 },
  { date: "Jan 8", passed: 258, failed: 10, flaky: 7 },
  { date: "Jan 15", passed: 267, failed: 8, flaky: 6 },
  { date: "Jan 22", passed: 275, failed: 9, flaky: 5 },
  { date: "Jan 29", passed: 282, failed: 7, flaky: 4 },
  { date: "Feb 5", passed: 289, failed: 6, flaky: 3 },
  { date: "Feb 12", passed: 295, failed: 5, flaky: 4 },
]

export function TestTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Execution Trends</CardTitle>
        <CardDescription>Pass/fail rates over the last 6 weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="passed" stroke="hsl(var(--accent))" strokeWidth={2} name="Passed" />
            <Line type="monotone" dataKey="failed" stroke="hsl(var(--destructive))" strokeWidth={2} name="Failed" />
            <Line type="monotone" dataKey="flaky" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Flaky" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
