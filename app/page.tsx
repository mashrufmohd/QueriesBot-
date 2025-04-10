import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Services } from '@/components/services';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { ChatWidget } from '@/components/chat-widget';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ChatWidget />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}