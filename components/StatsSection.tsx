import React from "react";
import { motion } from "framer-motion";

// Define the type for each stat item
interface StatItem {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4"
            >
              <p className="text-3xl font-bold text-orange-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
