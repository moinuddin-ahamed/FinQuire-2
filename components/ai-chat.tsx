"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, User, ArrowUp, Minimize2, Maximize2 } from "lucide-react"

export function AiChat() {
  const [isMinimized, setIsMinimized] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <Card
      className={`fixed bottom-4 right-4 w-80 md:w-96 shadow-lg transition-all duration-300 bg-background/90 backdrop-blur ${isMinimized ? "h-14" : "h-[500px]"}`}
    >
      <CardHeader className="p-3 border-b border-gray-800 flex flex-row items-center justify-between">
        <CardTitle className="text-sm flex items-center gap-2 text-white">
          <Bot className="h-4 w-4 text-primary" />
          Financial Assistant
        </CardTitle>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? <Maximize2 className="h-4 w-4 text-white" /> : <Minimize2 className="h-4 w-4 text-white" />}
        </Button>
      </CardHeader>

      {!isMinimized && (
        <>
          <CardContent className="p-3 overflow-y-auto h-[calc(100%-110px)]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <Bot className="h-8 w-8 mb-2 text-primary" />
                <p>How can I help with your finances today?</p>
                <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                  {["Analyze my portfolio", "Market predictions", "Investment advice", "Explain crypto trends"].map(
                    (suggestion) => (
                      <Button
                        key={suggestion}
                        variant="outline"
                        size="sm"
                        className="text-xs text-white"
                        onClick={() => {
                          handleInputChange({ target: { value: suggestion } } as any)
                          setTimeout(() => {
                            const form = document.getElementById("chat-form") as HTMLFormElement
                            if (form) form.requestSubmit()
                          }, 100)
                        }}
                      >
                        {suggestion}
                      </Button>
                    ),
                  )}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full ${message.role === "user" ? "bg-primary" : "bg-muted"}`}
                    >
                      {message.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-white"}`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <form id="chat-form" onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about your finances..."
                className="flex-1 bg-background/50 text-white"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <ArrowUp className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </>
      )}
    </Card>
  )
}

