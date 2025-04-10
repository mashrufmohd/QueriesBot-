'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does your AI chatbot work?',
    answer: 'Our AI chatbot uses advanced natural language processing and machine learning algorithms to understand and respond to customer inquiries in real-time. It continuously learns from interactions to provide more accurate and helpful responses.',
  },
  {
    question: 'What kind of support channels do you offer?',
    answer: 'We provide multi-channel support including live chat, email, social media, and messaging platforms. Our AI system seamlessly integrates across all channels for consistent customer experience.',
  },
  {
    question: 'How secure is your platform?',
    answer: 'We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with international data protection standards to ensure your data remains safe.',
  },
  {
    question: 'Can the AI handle complex customer inquiries?',
    answer: 'Yes, our AI is trained to handle complex queries and knows when to escalate to human agents. It can understand context, remember conversation history, and provide detailed, accurate responses.',
  },
  {
    question: 'How do you ensure quality of responses?',
    answer: 'We maintain high quality through continuous monitoring, regular updates to our AI models, and human oversight. Our system also learns from feedback to improve accuracy over time.',
  },
];

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered customer support platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}