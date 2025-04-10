'use client';

import { Navbar } from '@/components/navbar';
import { ChatWidget } from '@/components/chat-widget';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background/70 hero-pattern">
      <Navbar />
      <ChatWidget autoOpen={true} />
      
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              24/7 AI Chat Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant answers to your questions with our AI-powered chat support system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 glass-effect rounded-lg shadow-lg"
            >
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Advanced AI technology for accurate and instant responses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 glass-effect rounded-lg shadow-lg"
            >
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
              <p className="text-muted-foreground">Instant messaging with smart response suggestions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 glass-effect rounded-lg shadow-lg"
            >
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Human Backup</h3>
              <p className="text-muted-foreground">Seamless escalation to human agents when needed</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}