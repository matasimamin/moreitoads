import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-400">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Redo Att Öka Din Försäljning Med Video?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Boka ett kostnadsfritt idémöte idag och låt oss skapa en
            skräddarsydd videostrategi för ditt företag
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-orange-600 bg-white hover:bg-gray-100 px-8 py-2 rounded-lg text-lg font-medium shadow-lg flex items-center justify-center">
              Boka Möte <ChevronRight className="ml-2" />
            </button>
            <button className="text-white border border-white px-8 py-2 rounded-lg text-lg font-medium hover:bg-white/10">
              Kontakta Oss
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
