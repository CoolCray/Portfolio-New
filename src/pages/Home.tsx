import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const skills = [
    'Laravel', 'JavaScript', 'Python', 'React', 'Figma', 'Power BI',
    'UI/UX Design', 'Data Science', 'Web Development'
  ];

  const scrollToAbout = () => {
    document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm{' '}
                <span className="text-primary-light dark:text-primary-dark">
                  Kresna
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Information Systems Student & Web Developer
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Passionate about creating innovative web solutions and extracting insights from data. 
                Currently pursuing my degree at Universitas Atma Jaya Yogyakarta with expertise in 
                full-stack development and data science.
              </motion.p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium border border-primary-light/20 dark:border-primary-dark/20"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View My Work</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-semibold hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              onClick={scrollToAbout}
              className="mt-16 flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
            >
              <span className="text-sm font-medium mb-2">Learn More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="h-6 w-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I'm an 8th-semester Information Systems student at Universitas Atma Jaya Yogyakarta, 
              passionate about bridging technology and business solutions. With hands-on experience 
              in web development and data science, I love creating digital experiences that make a difference.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Read More</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;