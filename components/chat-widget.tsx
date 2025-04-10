'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export function ChatWidget({ autoOpen = false, userId }: { autoOpen?: boolean; userId: string }) {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ✅ Fetch chat history from MongoDB when chat opens
  useEffect(() => {
    if (isOpen) {
      fetchHistory(userId);
    }
  }, [isOpen, userId]);

  const fetchHistory = async (userId: string) => {
    try {
      const response = await fetch('/api/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chat history');
      }

      const data = await response.json();
      setMessages(data.history);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const botMessage = { id: messages.length + 2, text: data.reply, isBot: true };

      setMessages((prev) => [...prev, botMessage]);

      // ✅ Save chat history to MongoDB
      saveToDB(userId, [userMessage, botMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage = { id: messages.length + 2, text: "I'm having trouble responding right now.", isBot: true };
      setMessages((prev) => [...prev, errorMessage]);

      saveToDB(userId, [userMessage, errorMessage]); // Save even error responses
    }
  };

  // ✅ Save messages to MongoDB
  const saveToDB = async (userId: string, newMessages: Message[]) => {
    try {
      await fetch('/api/save-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, messages: newMessages }),
      });
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-card/95 backdrop-blur-sm w-[350px] h-[500px] rounded-lg shadow-lg flex flex-col border">
          <div className="p-4 border-b flex justify-between items-center bg-primary/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <h3 className="font-semibold">AI Chat Support</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {/* Auto-scroll target */}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t bg-background/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-1" />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="h-12 w-12 rounded-full shadow-lg">
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
