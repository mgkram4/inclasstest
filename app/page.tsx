// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// You'll need to install these packages:
// npm install framer-motion @heroicons/react lucide-react

export default function Home() {
  const [selectedWork, setSelectedWork] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const artworks = [
    {
      title: "Blue Dreams",
      description: "Digital art exploration of underwater themes",
      image: "/api/placeholder/800/600",
      category: "Digital Art"
    },
    {
      title: "Neon Nights",
      description: "Urban landscape with cyberpunk elements",
      image: "/api/placeholder/800/600",
      category: "Illustration"
    },
    {
      title: "Natural Flow",
      description: "Abstract representation of natural patterns",
      image: "/api/placeholder/800/600",
      category: "Abstract"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Artist Name
            </motion.h1>
            <motion.div 
              className="flex gap-6 text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-blue-900 mb-6">Digital Artist & Illustrator</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Creating unique digital experiences through art and design
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/api/placeholder/600/800"
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">About Me</h3>
              <p className="text-blue-700 mb-6">
                With over a decade of experience in digital art and illustration, 
                I specialize in creating unique visual experiences that blend traditional 
                artistic principles with modern digital techniques.
              </p>
              <p className="text-blue-700 mb-6">
                My work has been featured in various digital galleries and I've 
                collaborated with leading brands in the tech and entertainment industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-3xl font-bold text-blue-900 mb-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Featured Work
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {artworks.map((artwork, index) => (
              <motion.div 
                key={index}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h4 className="text-xl font-bold mb-2">{artwork.title}</h4>
                  <p className="text-center">{artwork.description}</p>
                  <span className="mt-4 text-blue-200">{artwork.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6">Let's Create Together</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects and creative ideas.
              Whether you have a specific project in mind or just want to explore possibilities,
              let's start a conversation.
            </p>
            <motion.button 
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-blue-950 text-blue-200">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Artist Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}