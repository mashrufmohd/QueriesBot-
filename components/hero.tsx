'use client';
import React from "react";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80 dark:from-primary/10 dark:to-background/90" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-12 w-12 text-primary mr-2" />
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Revolutionizing Customer Support with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of customer service with our AI-powered platform. 
              Instant responses, 24/7 availability, and human-like interactions.
            </p>

            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              onClick={() => router.push('/chat')}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}