import React from "react";
import { motion } from "framer-motion";
import { Video, Play, Layout, Share2 } from "lucide-react";

// Define the structure for each service
interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
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
            Våra Tjänster
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vad Vi Kan Erbjuda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Allt du behöver för att lyckas med din digitala marknadsföring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
