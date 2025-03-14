"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { VaultTable } from "@/components/vault-table"
import { AiChat } from "@/components/ai-chat"
import { AiInsights } from "@/components/ai-insights"
import { PortfolioAnalysis } from "@/components/portfolio-analysis"
import {
  BarChart3,
  ChevronDown,
  Globe,
  Home,
  LayoutDashboard,
  Settings,
  Wallet,
  MessageSquare,
  Brain,
  TrendingUp,
  Lightbulb,
} from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-gray-800 bg-background/50 backdrop-blur">
          <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold">FinQuire</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-background/50" />
          </div>
          <nav className="space-y-2 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <MessageSquare className="h-4 w-4" />
              AI Assistant
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <Lightbulb className="h-4 w-4" />
              Smart Insights
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <BarChart3 className="h-4 w-4" />
              Portfolio Analysis
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <Globe className="h-4 w-4" />
              Market Data
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <TrendingUp className="h-4 w-4" />
              Trading Signals
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <Home className="h-4 w-4" />
              Funding
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <Wallet className="h-4 w-4" />
              Yield Vaults
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">AI Financial Dashboard</h1>
              <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
            </div>
            <Button variant="outline" className="gap-2 text-white">
              Ethereum Network
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
              title="Your Balance"
              value="$74,892"
              change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
            />
            <MetricsCard
              title="Your Deposits"
              value="$54,892"
              change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
            />
            <MetricsCard
              title="Accrued Yield"
              value="$20,892"
              change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
            />
          </div>

          <div className="grid gap-6 mt-6 lg:grid-cols-2">
            <AiInsights />
            <PortfolioAnalysis />
          </div>

          <Card className="mt-6 p-6 bg-background/50 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Market Performance</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-white">
                  Today
                </Button>
                <Button size="sm" variant="ghost" className="text-white">
                  Last week
                </Button>
                <Button size="sm" variant="ghost" className="text-white">
                  Last month
                </Button>
                <Button size="sm" variant="ghost" className="text-white">
                  Last 6 month
                </Button>
                <Button size="sm" variant="ghost" className="text-white">
                  Year
                </Button>
              </div>
            </div>
            <StatsChart />
          </Card>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4 text-white">Your Active Vaults</h2>
            <VaultTable />
          </div>

          <AiChat />
        </main>
      </div>
    </div>
  )
}

