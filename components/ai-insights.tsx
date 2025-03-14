import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Info } from "lucide-react"

const insights = [
  {
    type: "opportunity",
    title: "BTC price correction",
    description: "Bitcoin is showing signs of a potential price correction. Consider adjusting your position.",
    impact: "high",
    icon: TrendingDown,
  },
  {
    type: "alert",
    title: "Market volatility",
    description: "Increased market volatility detected. Review your risk management strategy.",
    impact: "medium",
    icon: AlertTriangle,
  },
  {
    type: "recommendation",
    title: "Portfolio diversification",
    description: "Your portfolio is heavily weighted in BTC. Consider diversifying to reduce risk.",
    impact: "medium",
    icon: Info,
  },
  {
    type: "positive",
    title: "ETH yield opportunity",
    description: "Ethereum staking rates have increased. Consider allocating more assets to ETH.",
    impact: "high",
    icon: TrendingUp,
  },
]

export function AiInsights() {
  return (
    <Card className="bg-background/50 backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
          <CheckCircle className="h-5 w-5 text-primary" />
          AI Financial Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div
                className={`p-2 rounded-full ${
                  insight.type === "opportunity"
                    ? "bg-blue-500/10 text-blue-500"
                    : insight.type === "alert"
                      ? "bg-red-500/10 text-red-500"
                      : insight.type === "recommendation"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-green-500/10 text-green-500"
                }`}
              >
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{insight.title}</h3>
                  <Badge
                    variant={
                      insight.impact === "high" ? "default" : insight.impact === "medium" ? "secondary" : "outline"
                    }
                  >
                    {insight.impact} impact
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

