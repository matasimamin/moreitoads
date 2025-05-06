import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Våra försäljningar ökade med 40% efter att vi började använda Moreitos videos. De förstår verkligen hur man får produkter att sticka ut.",
    author: "Anna Karlsson",
    role: "VD, Modebutik",
  },
  {
    quote:
      "Snabb service och hög kvalité till ett mycket bra pris. Vi fick vår första video inom 24 timmar och resultatet överraskade oss positivt.",
    author: "Marcus Lind",
    role: "Grundare, Matbutik",
  },
  {
    quote:
      "Professionellt bemötande och kreativa lösningar. Vårt varumärke har fått en helt ny dimension tack vare deras videor.",
    author: "Sara Eriksson",
    role: "Marknadschef, Spa",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vad Våra Kunder Säger
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Läs vad andra företagare tycker om våra videotjänster
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
