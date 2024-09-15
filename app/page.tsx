"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const [questionCategory, setQuestionCategory] = useState('interest-hobbies')
  const [lineCategory, setLineCategory] = useState('opening-lines')

  const questions = [
    "How comfortable are you with taking risks in your investments?",
    "What are your short-term and long-term financial goals?",
    "What are your current assets, liabilities, income, and expenses?"
  ]

  const lines = [
    "What motivated you to seek financial advice today?",
    "If you could achieve one major financial goal this year, what would it be?",
    "What's the most exciting thing you're planning for this year?",
    "How did you first get interested in investing or managing your finances?",
    "What does financial security mean to you?"
  ]
  

  const handleOpenQuestions = () => {
    window.open('/meetingInterface', ); 
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 mb-8 mt-16">
      
      <div className="flex justify-center items-center mb-6">
        <Button onClick={handleOpenQuestions}>Open Questions</Button>
      </div>

      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-orange-500">Questions to Ask</h2>
            <Select value={questionCategory} onValueChange={setQuestionCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="interest-hobbies">Interest & Hobbies</SelectItem>
                <SelectItem value="goals">Goals</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-4">
  {questions.map((question, index) => (
    <Card key={index} className={`${index === 1 ? 'border-orange-500 border-2' : ''} lg:rounded-xl h-32`}>
      <CardContent className="p-4">
        <p className="text-sm">{question}</p>
      </CardContent>
    </Card>
  ))}
</div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-orange-500">Lines to Say</h2>
            <Select value={lineCategory} onValueChange={setLineCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opening-lines">Opening Lines</SelectItem>
                <SelectItem value="closing-lines">Closing Lines</SelectItem>
                <SelectItem value="follow-up">Follow-up</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            {lines.map((line, index) => (
              <li key={index} className="text-sm">{line}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
