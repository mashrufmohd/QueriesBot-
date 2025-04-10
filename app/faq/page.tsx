'use client';

import { Navbar } from '@/components/navbar';
import { FAQ } from '@/components/faq';
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find quick answers to common questions about our AI-powered support platform
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Input
                type="search"
                placeholder="Search FAQs..."
                className="pl-10 pr-4 py-6 text-lg"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </motion.div>

          <FAQ />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <Button size="lg" className="text-lg">
              <MessageSquare className="mr-2 h-5 w-5" /> Start a Chat
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}