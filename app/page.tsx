// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiBot } from 'react-icons/bi';
import { BsCodeSlash, BsRobot } from 'react-icons/bs';
import { FaGoogleDrive } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiGithub, SiOpenai } from 'react-icons/si';

const tools = [
  { name: "ChatGPT", icon: SiOpenai },
  { name: "Midjourney", icon: BiBot },
  { name: "Claude", icon: BiBot },
  { name: "VS Code", icon: BsCodeSlash },
  { name: "GitHub Copilot", icon: BsRobot },
  { name: "HTML", icon: AiFillHtml5 },
  { name: "CSS", icon: IoLogoCss3 },
  { name: "GitHub", icon: SiGithub }
];

const students = [
  { name: "Evelyn Yan", website: "https://evelynyann.github.io/personal-profile/", image: "/images/student4.png" },
  { name: "Iris Ju", website: "https://mgkram4.github.io/IRISnew/", image: "/images/student5.png" },
  { name: "Bob Zhang", website: "https://bob007919.github.io/bob007919/", image: "/images/student6.png" },
  { name: "Tim Zhou", website: "https://zt-1124.github.io/Zt/", image: "/images/student3.png" },
  { name: "Kenneth Shi", website: "https://superawesome15.github.io/kenneth-proj/", image: "/images/student8.png" },
  { name: "Sky Liu", website: "https://milkdragon7.github.io/sky/", image: "/images/student10.png" },
  { name: "James Yang", website: "https://mgkram4.github.io/James-Port/", image: "/images/student9.png" },
  { name: "Oliver Zhang", website: "https://easy54188.github.io/personal-info/", image: "/images/student11.png" },
  { name: "Winnie Deng", website: "https://h2omst.github.io/winnie/", image: "/images/cappyhappy.jpeg" },
  { name: "Amy Liu", website: "https://amyljuzi.github.io/Amy-/", image: "/images/student2.png" },
  { name: "Phoebe Huang", website: "https://phoebe525.github.io/phoEbe1/", image: "/images/student1.png" },
  { name: "Ann Wen", website: "https://chris-portfolio.com", image: "/images/student7.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-[#1a4b84] text-white py-4 px-4 fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">AI Bootcamp 2025</div>
          <div className="flex items-center gap-6">
            <a 
              href="https://drive.google.com/drive/folders/1xdQbV-U7XztWvdJUZVIV--lZCqAj__IJ"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#c4a052] transition-colors flex items-center gap-2"
            >
              <FaGoogleDrive size={20} />
              <span>Class</span>
            </a>
            <a 
              href="https://github.com/mgkram4/student-Template" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#c4a052] transition-colors flex items-center gap-2"
            >
              <SiGithub size={20} />
              <span>Student Template</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="neural-network-animation"></div>
          </div>
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
              backgroundSize: ["100% 100%", "120% 120%"]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            style={{
              backgroundImage: "url('/api/placeholder/1000/1000')",
              backgroundSize: "cover"
            }}
          />
          <div className="max-w-4xl text-center z-10">
            <motion.div
              className="mb-8 text-[#1a4b84]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BsRobot size={80} className="mx-auto" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[#1a4b84] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Bootcamp 2025
              <span className="block text-2xl md:text-3xl text-[#c4a052] mt-4">
                Winter 1-Week Intensive
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#1a4b84] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Learn to build modern applications with AI tools - no coding experience required
            </motion.p>
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://oakcrestacademy.org/" className="px-12 py-4 bg-[#1a4b84] text-white rounded hover:bg-[#15396a] transition-colors flex items-center gap-2 text-lg font-semibold">
                Apply Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 bg-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="binary-background"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#1a4b84] mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Tools You&apos;ll Master
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-blue-50 rounded-xl p-6 flex flex-col items-center hover:bg-blue-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <tool.icon size={48} className="text-[#1a4b84] mb-4" />
                  <h3 className="text-[#1a4b84] font-semibold">{tool.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Showcase */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#1a4b84] mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Student Portfolios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {students.map((student, index) => (
                <motion.a
                  href={student.website}
                  key={student.name}
                  className="block group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#1a4b84] mb-2">
                        {student.name}
                      </h3>
                      <p className="text-[#1a4b84]">View Portfolio →</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 px-4 bg-[#1a4b84] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 AI Bootcamp. Building the future with AI.</p>
div        </div>
      </footer>
    </main>
  );
}