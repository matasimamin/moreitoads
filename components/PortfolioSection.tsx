import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, ChevronRight } from "lucide-react";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
}) => {
  const [playingVideo, setPlayingVideo] = useState<PortfolioItem | null>(null);

  return (
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
            Se exempel på våra tidigare projekt och hur vi har hjälpt andra
            företag
          </p>
        </motion.div>

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
                  <h3 className="text-white font-medium text-lg mb-1">
                    {item.title}
                  </h3>
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

        {/* Video Modal */}
        {playingVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={(e) =>
              e.target === e.currentTarget && setPlayingVideo(null)
            }
          >
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                aria-label="Stäng video"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full"
                  key={playingVideo.videoUrl}
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src={playingVideo.videoUrl} type="video/mp4" />
                  Din webbläsare stöder inte videouppspelning.
                </video>
              </div>

              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {playingVideo.title}
                </h3>
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
            onClick={() => console.log("Visa fler projekt klickad")}
          >
            Visa Fler Projekt
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
