"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Brain } from "lucide-react"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

const portfolioData = {
  labels: ["Bitcoin", "Ethereum", "USDT", "Other Altcoins"],
  datasets: [
    {
      data: [45, 25, 20, 10],
      backgroundColor: ["#ff0000", "#3b82f6", "#10b981", "#8b5cf6"], // Changed first color from orange to red
      borderWidth: 0,
    },
  ],
}

const riskAnalysis = [
  { category: "Volatility", score: 75, color: "bg-yellow-500" },
  { category: "Diversification", score: 45, color: "bg-red-500" },
  { category: "Liquidity", score: 85, color: "bg-green-500" },
  { category: "Market Exposure", score: 60, color: "bg-blue-500" },
]

export function PortfolioAnalysis() {
  return (
    <Card className="bg-background/50 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
          <Brain className="h-5 w-5 text-primary" />
          AI Portfolio Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Asset Allocation</h3>
            <div className="h-[180px] flex items-center justify-center">
              <Doughnut
                data={portfolioData}
                options={{
                  cutout: "70%",
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        color: "#a1a1aa",
                        font: {
                          size: 11,
                        },
                        padding: 10,
                      },
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.label}: ${context.raw}%`,
                      },
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Risk Assessment</h3>
            <div className="space-y-4">
              {riskAnalysis.map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex justify-between text-xs text-white">
                    <span>{item.category}</span>
                    <span>{item.score}/100</span>
                  </div>
                  <Progress value={item.score} className={`h-2 ${item.color}`} />
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>AI recommendation: Consider rebalancing your portfolio to improve diversification score.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

