"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Play,
  Video,
  Layout,
  Share2,
  ChevronRight,
  Star,
  Check,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactForm from "@/components/lib/ContactForm";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/About";
import StatsSection from "@/components/StatsSection";
import HeroSection from "@/components/HeroSection";

// FloatingAnimation Component
// const FloatingAnimation = ({
//   children,
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   delay?: number;
// }) => (
//   <motion.div
//     initial={{ y: 20 }}
//     animate={{ y: [-10, 10, -10] }}
//     transition={{
//       duration: 4,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut",
//       delay,
//     }}
//   >
//     {children}
//   </motion.div>
// );

// Typ för bakgrundsbubblorna
interface Bubble {
  width: number;
  height: number;
  left: number;
  top: number;
  color: string;
}

// Portfolio Item Type
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

// Home Component
export default function Home() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [playingVideo, setPlayingVideo] = useState<PortfolioItem | null>(null);

  const statsData = [
    { number: "20+", label: "Nöjda kunder" },
    { number: "1M+", label: "Visningar" },
    { number: "72h", label: "Snabb leverans" },
    { number: "5⭐", label: "Betyg" },
  ];

  const features = [
    { description: "Mobiloptimerade videor som når fler" },
    { description: "Hög kvalité till ett företagsvänligt pris" },
    { description: "Snabb produktionstid - ofta klar inom 24h" },
    { description: "Anpassade efter din målgrupp och budskap" },
  ];

  const services = [
    {
      icon: Video,
      title: "Korta Reklamvideos",
      description: "Engagerande 1-minuts videos optimerade för sociala medier",
      color: "text-orange-600 bg-orange-50",
    },
    {
      icon: Play,
      title: "Sociala Medier Content",
      description: "Regelbundet innehåll för att hålla din publik engagerad",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Layout,
      title: "Landningssidor",
      description: "Konverterande landningssidor som matchar ditt varumärke",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Share2,
      title: "Annonsuppsättning",
      description: "Komplett annonsuppsättning och målgruppsanpassning",
      color: "text-green-600 bg-green-50",
    },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Molkom Car center AB",
      description: "Kampanjfilm • 35% ökad kundtrafik",
      imageUrl: "/images/hero/i1.png",
      videoUrl: "/videose/p1.mp4",
    },
    {
      id: 2,
      title: "Taxi solsta i Karlstad",
      description: "Reklamfilm • 10% rabatt",
      imageUrl: "/images/hero/i2.jpg",
      videoUrl: "/videose/p2.mp4",
    },
    {
      id: 3,
      title: "Annonser för Bilcarcenter",
      description: "Reklamfilm ",
      imageUrl: "/images/hero/i3.jpg",
      videoUrl: "/videose/p3.mp4",
    },
    // {
    //   id: 4,
    //   title: "Sociala Medier Kampanj för Restaurang XYZ",
    //   description: "Kampanjfilm • 25% ökning i bokningar",
    //   imageUrl: "",
    //   videoUrl: "/videos/restaurant.mp4",
    // },
    // {
    //   id: 5,
    //   title: "Eventfilm för Tech-konferens",
    //   description: "Eventfilm • 40% ökad medieuppmärksamhet",
    //   imageUrl: "",
    //   videoUrl: "/videos/tech-event.mp4",
    // },
    // {
    //   id: 6,
    //   title: "Reklam för Nyhetsföretag",
    //   description: "Reklamfilm • 30% fler läsare",
    //   imageUrl: "",
    //   videoUrl: "/videos/news-ad.mp4",
    // },
  ];

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Stats Section */}
      <StatsSection stats={statsData} />

      {/* About Section */}
      <AboutSection
        imageUrl="https://images.unsplash.com/photo-1579389083078-4e7018379f7e"
        altText="Videoproduktion"
        title="Varför Välja Våra Videotjänster?"
        paragraph="I dagens digitala värld är video det mest engagerande sättet att nå din målgrupp. Våra specialdesignade 1-minuts reklamvideos är perfekt anpassade för sociala medier och konverterar betydligt bättre än statiskt innehåll."
        features={features}
      />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Portfolio Section */}
      <PortfolioSection portfolioItems={portfolioItems} />

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>
      {/* CTA Section */}
      <CTASection />

      {/* Contact Form */}
      <ContactForm></ContactForm>

      {/* Footer */}
      <Footer />
    </div>
  );
}
