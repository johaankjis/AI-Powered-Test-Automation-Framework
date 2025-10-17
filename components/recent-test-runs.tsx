import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

const testRuns = [
  {
    id: "run-1",
    name: "AI Feature Regression Suite",
    status: "passed",
    duration: "12m 34s",
    timestamp: "2 minutes ago",
    tests: { passed: 145, failed: 0, total: 145 },
  },
  {
    id: "run-2",
    name: "E2E Playwright Tests",
    status: "passed",
    duration: "8m 12s",
    timestamp: "15 minutes ago",
    tests: { passed: 67, failed: 0, total: 67 },
  },
  {
    id: "run-3",
    name: "Model Evaluation Harness",
    status: "failed",
    duration: "5m 43s",
    timestamp: "1 hour ago",
    tests: { passed: 23, failed: 2, total: 25 },
  },
  {
    id: "run-4",
    name: "Unit Tests - Core Features",
    status: "passed",
    duration: "3m 21s",
    timestamp: "2 hours ago",
    tests: { passed: 89, failed: 0, total: 89 },
  },
]

export function RecentTestRuns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Test Runs</CardTitle>
        <CardDescription>Latest test execution results</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {testRuns.map((run) => (
            <div
              key={run.id}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="mt-1">
                {run.status === "passed" ? (
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{run.name}</h4>
                  <Badge variant={run.status === "passed" ? "default" : "destructive"}>{run.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {run.duration}
                  </span>
                  <span>
                    {run.tests.passed}/{run.tests.total} passed
                  </span>
                  <span>{run.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
