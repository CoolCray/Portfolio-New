import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Users, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Information Systems',
      school: 'Universitas Atma Jaya Yogyakarta',
      period: '2021 - 2025 (Expected)',
      description: 'Currently in 8th semester, focusing on system analysis, web development, and data management.',
    }
  ];

  const experiences = [
    {
      title: 'KSAD Website Manager',
      organization: 'Keluarga Siswa Atma Jaya (KSAD)',
      period: '2022 - Present',
      description: 'Responsible for managing and maintaining the official KSAD website, implementing new features and ensuring optimal performance.',
    },
    {
      title: 'UI/UX Design Competitor',
      organization: 'Various Design Competitions',
      period: '2022 - 2024',
      description: 'Participated in multiple UI/UX design competitions, creating user-centered design solutions using Figma.',
    }
  ];

  const skills = [
    {
      category: 'Web Development',
      icon: Code,
      skills: ['Laravel', 'JavaScript', 'React', 'HTML/CSS', 'PHP', 'Node.js']
    },
    {
      category: 'Data Science',
      icon: Database,
      skills: ['Python', 'Power BI', 'Data Analysis', 'Machine Learning', 'SQL']
    },
    {
      category: 'Design & Tools',
      icon: Award,
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Adobe Creative Suite']
    }
  ];

  const achievements = [
    'Developed welding decision support system using advanced algorithms',
    'Created online retail prediction model with high accuracy',
    'Successfully managed KSAD website with improved user engagement',
    'Competed in multiple UI/UX design competitions',
    'Maintained high academic performance throughout university'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-light/5 to-primary-dark/5 dark:from-primary-dark/10 dark:to-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I'm Kresna Dananjaya, an 8th-semester Information Systems student at 
              Universitas Atma Jaya Yogyakarta. My journey in technology began with a curiosity 
              about how digital systems can solve real-world problems and create meaningful impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Throughout my academic journey, I've developed a strong foundation in both web 
              development and data science. I believe in the power of technology to transform 
              businesses and improve lives, which drives my passion for creating innovative 
              solutions that bridge the gap between technical excellence and user needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding or analyzing data, you'll find me exploring new design trends, 
              participating in tech communities, or working on personal projects that challenge 
              my creativity and technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GraduationCap className="h-12 w-12 text-primary-light dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary-light dark:text-primary-dark font-medium mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Briefcase className="h-12 w-12 text-primary-light dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-primary-light dark:text-primary-dark font-medium mb-2">
                  {exp.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <Icon className="h-10 w-10 text-primary-light dark:text-primary-dark mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="h-12 w-12 text-primary-light dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Achievements</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;