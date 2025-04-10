'use client';

import { Navbar } from '@/components/navbar';
import { Contact } from '@/components/contact';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

export default function ContactPage() {
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
            <Headphones className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Reach out to our team for personalized support and solutions
            </p>
          </motion.div>

          <Contact />
        </div>
      </section>
    </main>
  );
}