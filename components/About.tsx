import React from "react";
import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";

// Define the structure for each feature item
interface Feature {
  description: string;
}

interface AboutSectionProps {
  imageUrl: string;
  altText: string;
  title: string;
  paragraph: string;
  features: Feature[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl,
  altText,
  title,
  paragraph,
  features,
}) => {
  return (
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
                src={imageUrl}
                alt={altText}
                className="rounded-xl shadow-lg w-full"
                loading="lazy" // Enable lazy loading for the image
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
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{paragraph}</p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
