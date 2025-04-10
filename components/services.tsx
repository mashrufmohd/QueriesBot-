'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  BarChart3,
  MessageSquare,
  Brain,
  Users,
  Shield,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'AI-Powered Responses',
    description: 'Instant, accurate answers powered by advanced artificial intelligence',
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into customer interactions and trends',
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Multi-Channel Support',
    description: 'Seamless integration across all communication channels',
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Smart Learning',
    description: 'Continuous improvement through machine learning algorithms',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team Collaboration',
    description: 'Efficient workflow management for support teams',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Enterprise Security',
    description: 'Advanced security measures to protect sensitive data',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered solutions can transform your customer support experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}