import React from 'react';
import { Github, Linkedin, Mail, Award, Code, BookOpen, Briefcase, GraduationCap, FileCheck } from 'lucide-react';

function App() {
  const data = {
    name: "RAJAKUMARI PRESINGI",
    contact: {
      phone: "+91 9154129145",
      email: "presingirajakumari218@gmail.com",
      github: "https://github.com/RAJArksh0218",
      linkedin: "https://www.linkedin.com/in/presingi-rajakumari-205860289/"
    },
    objective: "I am a B.Tech student majoring in Artificial Intelligence with a strong proficiency in programming languages such as Python, C, HTML, CSS, and JavaScript. My keen interest in Full stack development & machine learning drives my pursuit of academic excellence with a GPA of 7.65.",
    
    technicalSkills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "AWS Cloud", "DevOps"],
    toolsTechnologies: ["Node.js", "REST APIs", "React.js", "MySQL", "MongoDB", "GitHub"],
    softSkills: ["Leadership", "Quick Learning & Problem Solving", "Time management"],

    education: {
      college: "Kakinada Institute of Engineering and Technology, Kakinada",
      degree: "BTech Computer Science Engineering & Artificial Intelligence",
      duration: "10/2022 – 05/2026",
      cgpa: "7.65"
    },

    experience: [
      {
        company: "Parardhi Technologies",
        role: "AIML Intern",
        location: "On-site",
        date: "Sep 2025 – Jan 2026",
        desc: [
          "Working on the development and implementation of AI/ML models to address real-world problems."
        ]
      },
      {
        company: "IIIT Hyderabad",
        role: "Summer Intern",
        location: "Online/Remote",
        date: "Dec 2023 – Jan 2024",
        desc: [
          "Developed Python-based predictive models with strong foundations in supervised learning, neural networks, and computer vision."
        ]
      },
      {
        company: "Swecha Telangana",
        role: "AI & NLP Intern",
        location: "Remote",
        date: "May 2024 – June 2025",
        desc: [
          "Fine-tuned LLMs using Python for regional language preservation and AI-driven NLP applications.",
          "Enhanced NLP model accuracy by optimizing data preprocessing and leveraging open-source tools."
        ]
      }
    ],

    projects: [
      {
        name: "Object Detection With YOLO",
        tools: "Python, AI, ML, Cnn algorithms",
        desc: [
          "Built a real-time object detection system using YOLOv5, enabling accurate detection on images, videos, and live webcam streams.",
          "Trained and evaluated the model on the COCO dataset, optimizing inference speed and detection accuracy for real-world applications."
        ]
      },
      {
        name: "Universal Language Translator",
        tools: "HTML, Tailwind CSS, JavaScript, Gemini API",
        desc: [
          "Built a universal language translator web app using JavaScript and Gemini API with auto language detection.",
          "Designed a responsive and user-friendly interface using Tailwind CSS for real-time translation."
        ]
      }
    ],

    certificates: [
      { organization: "Eduksills Foundation", title: "AWS Cloud Architecture & Fundamentals" },
      { organization: "Infosys Springboard", title: "Python Fundamental Certification" },
      { organization: "Microsoft Azure", title: "DevOps Azure & Cloud Computing" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-slate-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">{data.name}</h1>
        <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">{data.objective}</p>
        <div className="flex justify-center gap-6">
          <a href={`mailto:${data.contact.email}`} className="hover:text-blue-400 transition-colors" title="Email"><Mail size={24}/></a>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn"><Linkedin size={24}/></a>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="GitHub"><Github size={24}/></a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <GraduationCap size={24} className="text-blue-600"/> Education
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="text-xl font-bold text-slate-800">{data.education.college}</h3>
              <span className="text-sm font-semibold text-slate-500">{data.education.duration}</span>
            </div>
            <p className="text-slate-600 mt-1 font-medium italic">{data.education.degree}</p>
            <p className="text-blue-600 font-bold mt-2">CGPA: {data.education.cgpa}</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <Briefcase size={24} className="text-blue-600"/> Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                    <p className="text-blue-600 font-medium">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-semibold text-slate-500">{exp.date}</span>
                    <span className="block text-xs font-bold text-slate-400 uppercase">{exp.location}</span>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2">
                  {exp.desc.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <BookOpen size={24} className="text-blue-600"/> Projects
          </h2>
          <div className="grid gap-6">
            {data.projects.map((proj, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-1 text-slate-800">{proj.name}</h3>
                <p className="text-sm text-blue-500 font-mono mb-3 font-semibold tracking-tight">Tools: {proj.tools}</p>
                <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 text-sm">
                  {proj.desc.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <Award size={24} className="text-blue-600"/> Certificates
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 space-y-4">
            {data.certificates.map((cert, i) => (
              <div key={i} className="flex items-start gap-3">
                <FileCheck className="text-blue-500 mt-1 flex-shrink-0" size={18}/>
                <p className="text-slate-700">
                  <span className="font-bold">{cert.organization}:</span> {cert.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <Code size={24} className="text-blue-600"/> Skills
          </h2>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <p className="font-bold text-slate-800 mb-2">Technical Skills:</p>
              <div className="flex flex-wrap gap-2">
                {data.technicalSkills.map((s, i) => <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm border border-blue-100 font-medium">{s}</span>)}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-2">Tools & Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {data.toolsTechnologies.map((s, i) => <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm border border-slate-200 font-medium">{s}</span>)}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-2">Soft Skills:</p>
              <div className="flex flex-wrap gap-2">
                {data.softSkills.map((s, i) => <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm border border-green-100 font-medium">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer & Declaration */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center text-sm border-t border-slate-800 px-6">
        <p className="mb-4">© 2025 {data.name} | Portfolio built with React & Tailwind</p>
        <div className="max-w-2xl mx-auto border-t border-slate-700 pt-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Declaration</h4>
          <p className="text-slate-500 text-xs italic">
            "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;