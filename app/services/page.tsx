'use client';

import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { Services } from '@/components/services';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Sparkles, BarChart3, Shield } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-12 w-12 text-primary mr-2" />
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Our AI Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive suite of AI-powered customer support solutions
            </p>
          </motion.div>

          <Services />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Customer Support?</h2>
            <Button size="lg" className="text-lg px-8">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}