"use client";
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';
import ImageUrl from '/images/Bg.png';

const meetingTypes = [
  { value: 'marketing', label: 'Marketing Meeting' },
  { value: 'sales', label: 'Sales Meeting' },
  { value: 'product', label: 'Product Meeting' },
];

const questions: { [key: string]: string[] } = {
  marketing: [
    "What are our key marketing KPIs for this quarter?",
    "How is our latest campaign performing?",
    "What new channels should we explore?",
  ],
  sales: [
    "What's our current sales pipeline looking like?",
    "Are there any major deals we should discuss?",
    "How can we improve our conversion rates?",
  ],
  product: [
    "What features are prioritized for the next sprint?",
    "Are there any critical bugs we need to address?",
    "How are our user satisfaction scores trending?",
  ],
};

export default function MeetingInterface() {
  const [selectedMeetingType, setSelectedMeetingType] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const { toast } = useToast();  // Use toast from useToast

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (selectedMeetingType && questions[selectedMeetingType]) {
      interval = setInterval(() => {
        if (currentQuestionIndex < questions[selectedMeetingType].length) {
          toast({
            title: "Question to Ask",
            description: questions[selectedMeetingType][currentQuestionIndex],
            duration: 5000,
          });
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(interval!);
        }
      }, 30000); 
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [selectedMeetingType, currentQuestionIndex, toast]);

  const handleMeetingTypeChange = (value: string) => {
    setSelectedMeetingType(value);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Meeting Interface</h1>
          <Select onValueChange={handleMeetingTypeChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select meeting type" />
            </SelectTrigger>
            <SelectContent>
              {meetingTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <Image
            src={ImageUrl}  
            alt="Instagram Image"
            className="rounded-lg"
            height={720}
            width={1280}
          />
        </div>

        {selectedMeetingType && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Current Meeting: {meetingTypes.find(t => t.value === selectedMeetingType)?.label}</h2>
            <p>Questions will appear as toast messages during the meeting.</p>
            <ul className="list-disc ml-4 mt-4">
              {questions[selectedMeetingType].map((question, index) => (
                <li key={index} className="text-lg">{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}
