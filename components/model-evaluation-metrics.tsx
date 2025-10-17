import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  { label: "Accuracy", value: 94.7, color: "bg-primary" },
  { label: "Toxicity Rate", value: 2.1, color: "bg-destructive", inverse: true },
  { label: "Refusal Rate", value: 5.3, color: "bg-chart-3" },
  { label: "Response Time", value: 87, color: "bg-accent" },
]

export function ModelEvaluationMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Evaluation Metrics</CardTitle>
        <CardDescription>LLM performance indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{metric.label}</span>
              <span className="text-muted-foreground">{metric.value}%</span>
            </div>
            <Progress value={metric.value} className="h-2" indicatorClassName={metric.color} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
