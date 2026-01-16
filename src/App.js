import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, Award, GraduationCap, ChevronDown, Menu, X} from 'lucide-react';
import profilePic from './pranav_portfolio.png'; 

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "GlobalLogic India Pvt Ltd",
      role: "Software Engineering Trainee",
      period: "Aug 2025 - Present",
      description: " Working as a Software Engineering Trainee focusing on backend development using Java, Spring Boot, and Microservices architecture.Gained hands-on experience in designing and developing RESTful APIs, implementing business logic, integrating relational databases, and following industry-standard coding practices Currently contributing to a live production project, assisting in backend module development, debugging, and improving code quality while gaining exposure to real-world software engineering workflows.",
      tech: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
      company: "Lutech India Pvt Ltd",
      role: "Product Intern",
      period: "Jun 2024 - Jul 2024",
      description: "Worked on developing a custom chatbot for the product BharatOnline, where I was responsible for generating a product-specific knowledge base by gathering and preprocessing relevant data and fine-tuning various open-source LLMs, such as LLaMA and BLOOM, to improve the chatbot’s response accuracy and adaptability to the product using this custom knowledge base",
      tech: ["LLMs", "LLaMA", "BLOOM", "NLP"]
    }
  ];

  const projects = [
    {
      name: "IMU Sensor Based Remote Physiotherapy",
      period: "Aug 2024 - Mar 2025",
      description: "Collaborated in a team of 5 to develop a ReactJS, NodeJS-based digital physiotherapy system that tracks shoulder and knee exercises using ESP32 and MPU-6050 sensors for real-time motion analysis. Implemented real-time wireless data transmission using WebSockets and UDP to stream tilt angles and compute repetition counts, enabling precise detection of valid/invalid reps and efficiency scoring. This system was validated by a physiotherapist at the VNIT Health Centre. The research paper based on this project was accepted at the 5th International Conference on Computer Vision and Robotics, organized by the National Institute of Technology Goa (April 25–26, 2025), and later published in the book ComputerVision and Robotics – Proceedings of CVR 2025, Volume 2",
      tech: ["React.js", "Node.js", "ESP32", "WebSockets", "IoT"],
      highlight: "Published Research Paper"
    },
    {
      name: "MyResume - Resume Rating App",
      period: "Sept 2024 - Nov 2024",
      description: "Created MyResume, a ReactJS and Flask-based application that evaluates resumes against job descriptions and required skills, assigning a score out of 10 using Deep Learning and NLP. Integrated Llama 3.2 to generate personalized improvement suggestions and provide users with updated resumes aligned with the Job Description and the skills required for the role.",
      tech: ["React.js", "Flask", "Deep Learning", "NLP", "Llama 3.2"],
      highlight: "AI-Powered"
    },
    {
      name: "MockMate - AI Interview Platform",
      period: "Jun 2024 - Jul 2024",
      description: " Built an AI-powered mock interview platform using Next.js, PostgreSQL, supporting 10+ job roles, 3+ experience levels, and 100+ dynamically generated interview questions per session via Google Gemini API.Designed an NLP-based evaluation pipeline that scores responses across relevance, clarity, and technical depth and generates actionable feedback within 2 seconds, reducing manual interview preparation time by around 80%",
      tech: ["Next.js", "PostgreSQL", "Gemini API", "Clerk"],
      highlight: "80% Time Reduction"
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS"],
    "Frameworks": ["Spring Boot", "React.js", "Node.js", "Express.js", "Next.js", "Flask"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    "Core": ["DSA", "OOP", "Machine Learning", "Deep Learning", "Backend Development"]
  };

  const achievements = [
    { text: "LeetCode Rating: 1756", detail: "Rank 861/30000+ in Weekly Contest 491" },
    { text: "Codeforces Rating: 1439 (Specialist)", detail: "Active competitive programmer" },
    { text: "CodeChef Rating: 3 star(1636)", detail: "Rank 247 in Codechef starters 221" },
    { text: "JEE Mains 2021: 99.24%ile", detail: "Top 1% nationwide" }

  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-950/90 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            PD
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'experience', 'projects', 'skills', 'achievements'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-emerald-400 ${activeSection === section ? 'text-emerald-400' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4 px-4 sm:px-6 py-4">
              {['home', 'about', 'experience', 'projects', 'skills', 'achievements'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left hover:text-emerald-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Picture */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-800">
                  {/* Replace the src with your actual image URL */}
                  <img 
                    src={profilePic} 
                    alt="Pranav Deshpande"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
                  <span className="text-emerald-300">Available for Opportunities</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Pranav Deshpande</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 animate-slide-up delay-100">
                Software Engineer specializing in Backend Development & AI/ML
              </p>
              
              <p className="text-base md:text-lg text-slate-400 mb-8 animate-slide-up delay-200">
                Building scalable systems and intelligent applications with Java, Spring Boot, React, and cutting-edge AI technologies
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-slide-up delay-300">
                <a href="mailto:pranavd2602@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all transform hover:scale-105">
                  <Mail size={20} /> Get in Touch
                </a>
                <a href="https://github.com/Pranav0624" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-105">
                  <Github size={20} /> GitHub
                </a>
              </div>

              <div className="flex gap-6 justify-center md:justify-start animate-slide-up delay-400">
                <a href="https://www.linkedin.com/in/pranav-deshpande-08a869229/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Pranav0624" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:pranavd2602@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-emerald-400" />
            About Me
          </h2>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-2">B.Tech in Electronics and Communication Engineering</h3>
            <p className="text-emerald-400 mb-2">Visvesvaraya National Institute of Technology, Nagpur</p>
            <p className="text-slate-400 mb-4">Dec 2021 - May 2025 | CGPA: 7.82</p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Passionate software engineer with expertise in backend development, AI/ML, and full-stack applications. 
              Currently working at GlobalLogic on production-level microservices. Strong foundation in competitive programming 
              and research, with published work in computer vision and robotics. Love building products that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-emerald-400" />
            Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/50 transition-all transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">{exp.role}</h3>
                    <p className="text-xl text-slate-300">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-emerald-400" />
            Featured Projects
          </h2>
          
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/50 transition-all transform hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">{project.name}</h3>
                    <p className="text-slate-400 text-sm">{project.period}</p>
                  </div>
                  {project.highlight && (
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30 mt-2 sm:mt-0 self-start">
                      {project.highlight}
                    </span>
                  )}
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-emerald-400" />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 rounded-lg text-sm transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-emerald-400" />
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all transform hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{achievement.text}</h3>
                <p className="text-slate-300">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 mb-4">Built with React & Tailwind CSS</p>
          <p className="text-slate-500">© 2026 Pranav Deshpande. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}