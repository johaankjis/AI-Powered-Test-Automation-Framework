import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, CheckCircle2, XCircle, AlertTriangle, Zap } from "lucide-react"

const stats = [
  {
    label: "Test Coverage",
    value: "92%",
    change: "+2%",
    trend: "up",
    icon: CheckCircle2,
    color: "text-accent",
  },
  {
    label: "Flake Rate",
    value: "3.2%",
    change: "-1.8%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-chart-3",
  },
  {
    label: "Model Accuracy",
    value: "94.7%",
    change: "+0.5%",
    trend: "up",
    icon: Zap,
    color: "text-primary",
  },
  {
    label: "Failed Tests",
    value: "12",
    change: "-8",
    trend: "down",
    icon: XCircle,
    color: "text-destructive",
  },
]

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const isPositive =
          stat.trend === "up"
            ? stat.label !== "Failed Tests"
            : stat.label === "Failed Tests" || stat.label === "Flake Rate"
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon className={`h-5 w-5 ${stat.color}`} />
              <div className={`flex items-center gap-1 text-sm ${isPositive ? "text-accent" : "text-destructive"}`}>
                <TrendIcon className="h-4 w-4" />
                <span className="font-medium">{stat.change}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
