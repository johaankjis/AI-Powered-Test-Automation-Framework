import { Header } from "@/components/header"
import { StatsOverview } from "@/components/stats-overview"
import { TestCoverageChart } from "@/components/test-coverage-chart"
import { ModelEvaluationMetrics } from "@/components/model-evaluation-metrics"
import { TestTrendsChart } from "@/components/test-trends-chart"
import { RecentTestRuns } from "@/components/recent-test-runs"
import { CIPipelineStatus } from "@/components/ci-pipeline-status"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">QA Analytics Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Real-time insights into AI-powered test automation and model evaluation
          </p>
        </div>

        <StatsOverview />

        <div className="grid gap-6 lg:grid-cols-2">
          <TestCoverageChart />
          <ModelEvaluationMetrics />
        </div>

        <TestTrendsChart />

        <div className="grid gap-6 lg:grid-cols-2">
          <RecentTestRuns />
          <CIPipelineStatus />
        </div>
      </main>
    </div>
  )
}
