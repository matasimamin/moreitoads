'use client';

import './globals.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Video, Layout, Share2, ChevronRight, Star, Check, X } from "lucide-react";

// FloatingAnimation Component
const FloatingAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 20 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
);

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [playingVideo, setPlayingVideo] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }).map((_, i) => ({
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: i % 2 === 0 ? '#ff8c00' : '#ff4d00'
    }));
    setBubbles(newBubbles);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Något gick fel');
      }

      alert('Tack! Vi återkommer snart.');
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error: any) {
      console.error('Submit error:', error);
      alert(`Kunde inte skicka: ${error.message}`);
    }
  };

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Reklamvideo för Café Aroma",
      description: "Kampanjfilm • 35% ökad kundtrafik",
      imageUrl: "/images/hero/i1.png",
      videoUrl: "/videose/p1.mp4"
    },
    {
      id: 2,
      title: "Produktvideo för Skönhetsprodukter",
      description: "Produktfilm • 50% ökning i försäljning",
      imageUrl: "/images/hero/i2.jpg",
      videoUrl: "/videose/p2.mp4"
    },
    {
      id: 3,
      title: "Annonser för Gymkedja",
      description: "Reklamfilm • 20% fler medlemskap",
      imageUrl: "/images/hero/i3.jpg",
      videoUrl: "/videose/p3.mp4"
    },
    {
      id: 4,
      title: "Sociala Medier Kampanj för Restaurang XYZ",
      description: "Kampanjfilm • 25% ökning i bokningar",
      imageUrl: "/portfolio/restaurant-campaign.jpg",
      videoUrl: "/videos/restaurant.mp4"
    },
    {
      id: 5,
      title: "Eventfilm för Tech-konferens",
      description: "Eventfilm • 40% ökad medieuppmärksamhet",
      imageUrl: "/portfolio/tech-event.jpg",
      videoUrl: "/videos/tech-event.mp4"
    },
    {
      id: 6,
      title: "Reklam för Nyhetsföretag",
      description: "Reklamfilm • 30% fler läsare",
      imageUrl: "/portfolio/news-ad.jpg",
      videoUrl: "/videos/news-ad.mp4"
    },
  ];

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7ed] via-[#ffedd5] to-white py-28 sm:py-36">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-0 left-0 right-0 z-20 flex justify-center w-full"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d3c7e004-c129-4f58-a53a-5762a61a044d/cb89d83ea394b25d9c6c70d8f6c44ee8.png" 
              alt="Moreito Logo" 
              className="w-72 h-auto drop-shadow-lg mx-auto"
            />
          </motion.div>
        </div>

        {/* Creative Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {bubbles.map((bubble, i) => (
            <FloatingAnimation key={i} delay={i * 0.2}>
              <div
                className="absolute rounded-full opacity-10"
                style={{
                  backgroundColor: bubble.color,
                  width: `${bubble.width}px`,
                  height: `${bubble.height}px`,
                  left: `${bubble.left}%`,
                  top: `${bubble.top}%`,
                  filter: 'blur(40px)'
                }}
              />
            </FloatingAnimation>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="container px-4 mx-auto text-center relative z-10 mt-40"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.05, 1],
              backgroundColor: ['#ffedd5', '#fed7aa', '#ffedd5'],
            }}
            transition={{
              delay: 1,
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="inline-flex items-center px-4 py-2 rounded-full mb-6 shadow-sm"
            style={{
              background: 'linear-gradient(45deg, #ffedd5, #fed7aa, #ffedd5)',
              backgroundSize: '200% 200%',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Star className="w-4 h-4 mr-2 text-orange-600 fill-current" />
            </motion.div>
            <motion.span
              animate={{
                color: ['#9a3412', '#ea580c', '#9a3412'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-sm font-medium"
            >
              Nyhet: 1-minuts reklamvideos
            </motion.span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Reklamvideos
            </span> <br />Som Får Folk Att Stanna Upp
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professionella mobilfilmade videos som ökar din försäljning - snabbt, enkelt och prisvärt för småföretag
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="text-white bg-orange-600 hover:bg-orange-700 px-8 py-2 rounded-lg text-lg font-medium shadow-lg shadow-orange-200 flex items-center">
  Boka Gratis Idémöte <ChevronRight className="ml-2" />
</a>
            <button className="text-gray-900 border border-gray-300 px-8 py-2 rounded-lg text-lg font-medium bg-white hover:bg-gray-50">
              Se Portfolio
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Nöjda kunder" },
              { number: "1M+", label: "Visningar" },
              { number: "24h", label: "Snabb leverans" },
              { number: "5⭐", label: "Betyg" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4"
              >
                <p className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</p>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e" 
                  alt="Videoproduktion" 
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 p-4 rounded-xl shadow-lg">
                  <Play className="text-white w-8 h-8" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Varför Välja Våra Videotjänster?</h2>
              <p className="text-lg text-gray-600 mb-6">
                I dagens digitala värld är video det mest engagerande sättet att nå din målgrupp. Våra specialdesignade 1-minuts reklamvideos är perfekt anpassade för sociala medier och konverterar betydligt bättre än statiskt innehåll.
              </p>
              
              <div className="space-y-4">
                {[
                  "Mobiloptimerade videor som når fler",
                  "Hög kvalité till ett företagsvänligt pris",
                  "Snabb produktionstid - ofta klar inom 24h",
                  "Anpassade efter din målgrupp och budskap"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full mb-4">
              Våra Tjänster
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vad Vi Kan Erbjuda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Allt du behöver för att lyckas med din digitala marknadsföring
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Video, 
                title: "Korta Reklamvideos", 
                description: "Engagerande 1-minuts videos optimerade för sociala medier",
                color: "text-orange-600 bg-orange-50"
              },
              { 
                icon: Play, 
                title: "Sociala Medier Content", 
                description: "Regelbundet innehåll för att hålla din publik engagerad",
                color: "text-blue-600 bg-blue-50"
              },
              { 
                icon: Layout, 
                title: "Landningssidor", 
                description: "Konverterande landningssidor som matchar ditt varumärke",
                color: "text-purple-600 bg-purple-50"
              },
              { 
                icon: Share2, 
                title: "Annonsuppsättning", 
                description: "Komplett annonsuppsättning och målgruppsanpassning",
                color: "text-green-600 bg-green-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
<section className="py-20 bg-white">
  <div className="container px-4 mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full mb-4">
        Vårt Arbete
      </span>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Se exempel på våra tidigare projekt och hur vi har hjälpt andra företag
      </p>
    </motion.div>

    {/* Projektlista */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setPlayingVideo(item)}
          className="group relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={item.title}
            src={item.imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div>
              <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <Play className="text-white w-6 h-6 ml-1" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Förbättrad Video Player Modal */}
    {playingVideo && (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && setPlayingVideo(null)}
      >
        <div className="relative w-full max-w-6xl">
          {/* Stäng-knapp */}
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            aria-label="Stäng video"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Videospelare */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
              controls
              autoPlay
              playsInline
              className="w-full h-full"
              key={playingVideo.videoUrl}
              onEnded={() => setPlayingVideo(null)} // Stäng när video är klar
            >
              <source src={playingVideo.videoUrl} type="video/mp4" />
              Din webbläsare stöder inte videouppspelning.
            </video>
          </div>
          
          {/* Videoinformation */}
          <div className="mt-4 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">{playingVideo.title}</h3>
            
            
            {/* Tillbaka-knapp */}
            <button
              onClick={() => setPlayingVideo(null)}
              className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
              Tillbaka till portfolio
            </button>
          </div>
        </div>
      </div>
    )}

    <div className="text-center mt-12">
      <button 
        className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors"
        onClick={() => {
          // Här kan du lägga till logik för att visa fler projekt
          console.log('Visa fler projekt klickad');
        }}
      >
        Visa Fler Projekt
      </button>
    </div>
  </div>
</section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full mb-4">
              Kundberättelser
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vad Våra Kunder Säger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Läs vad andra företagare tycker om våra videotjänster
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Våra försäljningar ökade med 40% efter att vi började använda Moreitos videos. De förstår verkligen hur man får produkter att sticka ut.",
                author: "Anna Karlsson",
                role: "VD, Modebutik"
              },
              {
                quote: "Snabb service och hög kvalité till ett mycket bra pris. Vi fick vår första video inom 24 timmar och resultatet överraskade oss positivt.",
                author: "Marcus Lind",
                role: "Grundare, Matbutik"
              },
              {
                quote: "Professionellt bemötande och kreativa lösningar. Vårt varumärke har fått en helt ny dimension tack vare deras videor.",
                author: "Sara Eriksson",
                role: "Marknadschef, Spa"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-400">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Redo Att Öka Din Försäljning Med Video?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Boka ett kostnadsfritt idémöte idag och låt oss skapa en skräddarsydd videostrategi för ditt företag
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-orange-600 bg-white hover:bg-gray-100 px-8 py-2 rounded-lg text-lg font-medium shadow-lg">
                Boka Möte <ChevronRight className="ml-2 inline" />
              </button>
              <button className="text-white border border-white px-8 py-2 rounded-lg text-lg font-medium hover:bg-white/10">
                Kontakta Oss
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakta Oss</h2>
                <p className="text-gray-600 mb-6">
                  Har du frågor eller vill boka en tid? Fyll i formuläret så återkommer vi inom 24 timmar.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefon</p>
                      <p className="font-medium text-gray-900">070-123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">E-post</p>
                      <p className="font-medium text-gray-900">info@moreito.se</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adress</p>
                      <p className="font-medium text-gray-900">Skolgatan 12, Karlstad</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="md:w-1/2"
>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ditt Namn</label>
      <input
        id="name"
        type="text"
        placeholder="För- och efternamn"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Din E-post</label>
      <input
        id="email"
        type="email"
        placeholder="din@epost.se"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
      />
    </div>
    {/* Lägg till telefonnummer input här */}
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Ditt Telefonnummer</label>
      <input
        id="phone"
        type="tel"
        placeholder="070-123 45 67"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
      <textarea
        id="message"
        placeholder="Berätta om ditt projekt..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
      />
    </div>
    <button 
      type="submit" 
      className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-2 px-6 rounded-lg font-medium transition"
    >
      Skicka Meddelande
    </button>
  </form>
</motion.div>     </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d3c7e004-c129-4f58-a53a-5762a61a044d/cb89d83ea394b25d9c6c70d8f6c44ee8.png" 
          alt="Moreito Logo" 
          className="w-40 h-auto filter brightness-0 invert opacity-90"
        />
        <p className="mt-4 text-sm">Professionella videotjänster för småföretag</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        <div>
          <h3 className="text-white font-medium mb-3">Tjänster</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Reklamvideos</a></li>
            <li><a href="#" className="hover:text-white transition">Sociala Medier</a></li>
            <li><a href="#" className="hover:text-white transition">Landningssidor</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-3">Företag</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Om Oss</a></li>
            <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-3">Juridik</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Integritetspolicy</a></li>
            <li><a href="#" className="hover:text-white transition">Villkor</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Moreito. Alla rättigheter reserverade.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-white transition">
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
  href="https://www.instagram.com/moreito100?igsh=cDEyNGJjbHhscnR3" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <span className="sr-only">Instagram</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
</a>
        <a 
  href="https://www.tiktok.com/@moreito3?_t=ZN-8vfs6E6U0By&_r=1" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <span className="sr-only">TikTok</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
</a>
        <a href="#" className="hover:text-white transition">
          <span className="sr-only">YouTube</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
</div> 
     );
    }