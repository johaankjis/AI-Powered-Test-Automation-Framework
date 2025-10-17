import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, CheckCircle2, Clock, XCircle } from "lucide-react"

const pipelines = [
  {
    id: "pipeline-1",
    branch: "main",
    commit: "feat: add model evaluation",
    status: "success",
    stage: "Deploy",
    timestamp: "5 minutes ago",
  },
  {
    id: "pipeline-2",
    branch: "feature/ai-tests",
    commit: "test: add AI regression tests",
    status: "running",
    stage: "Testing",
    timestamp: "Running",
  },
  {
    id: "pipeline-3",
    branch: "fix/flaky-tests",
    commit: "fix: reduce test flakiness",
    status: "success",
    stage: "Deploy",
    timestamp: "1 hour ago",
  },
  {
    id: "pipeline-4",
    branch: "feature/dashboard",
    commit: "feat: update QA dashboard",
    status: "failed",
    stage: "Build",
    timestamp: "2 hours ago",
  },
]

export function CIPipelineStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CI/CD Pipeline Status</CardTitle>
        <CardDescription>Recent deployment pipeline runs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipelines.map((pipeline) => {
            const StatusIcon =
              pipeline.status === "success" ? CheckCircle2 : pipeline.status === "running" ? Clock : XCircle

            const statusColor =
              pipeline.status === "success"
                ? "text-accent"
                : pipeline.status === "running"
                  ? "text-chart-3"
                  : "text-destructive"

            return (
              <div
                key={pipeline.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="mt-1">
                  <StatusIcon className={`h-5 w-5 ${statusColor}`} />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-sm font-medium">{pipeline.branch}</span>
                    <Badge variant="outline" className="ml-auto">
                      {pipeline.stage}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{pipeline.commit}</p>
                  <p className="text-xs text-muted-foreground">{pipeline.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
