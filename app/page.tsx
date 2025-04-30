"use client"

import Image from "next/image"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Portfolio() {
  const sectionRef = useRef(null)
  const { inView } = useInView({
    triggerOnce: true,  // Hanya animasi sekali ketika elemen masuk viewport
    threshold: 0.1,     // Ketika 10% dari elemen terlihat
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/50 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold tracking-wide text-cyan-400">Leonardo</div>
          <nav className="hidden md:flex gap-6 text-sm">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 rounded-full border-4 border-cyan-400 shadow-cyan-400 shadow-md">
            <Image
              src="/test 1.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Leonardo Ivan Ransford</h1>
          <p className="text-cyan-400 mb-4 text-xl">Web Developer & Futurist</p>
          <p className="max-w-xl text-gray-300 mb-6">
            I craft futuristic, responsive websites using cutting-edge technologies to deliver immersive digital experiences.
          </p>
          <div className="flex gap-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 transition" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                I'm passionate about building clean, fast, and futuristic user interfaces. From frontend frameworks to backend
                integrations, I love turning ideas into reality.
              </p>
              <p>
                Outside of coding, I enjoy sci-fi films, exploring tech trends, and engaging in digital art and design.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="About Me"
                width={400}
                height={300}
                className="rounded-xl shadow-lg border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[ 
              "HTML & CSS", 
              "JavaScript", 
              "React", 
              "Next.js", 
              "Tailwind CSS", 
              "TypeScript", 
              "Node.js", 
              "Git" 
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-cyan-400 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                  alt={`Project ${project}`}
                  width={400}
                  height={200}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">Project {project}</h3>
                  <p className="text-sm text-gray-400">
                    Description of futuristic project {project} using modern web stack.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-400" asChild>
                      <a href="#">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                      <a href="#">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Contact
          </motion.h2>
          <div className="max-w-md mx-auto space-y-6 text-gray-300">
            <div className="space-y-4">
              <a href="mailto:ivanfebriantolalo@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Mail className="w-5 h-5" />
                ivanfebriantolalo@gmail.com
              </a>
              <a href="https://github.com/Schroerizaki" className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Github className="w-5 h-5" />
                github.com/Schroerizaki
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-febrianto-8530b1244/"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Linkedin className="w-5 h-5" />
                linkedin.com/in/ivan-febrianto-8530b1244
              </a>
            </div>
            <form className="space-y-4 pt-6">
              <input type="text" placeholder="Name" className="w-full rounded bg-white/10 p-2 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="w-full rounded bg-white/10 p-2 text-white placeholder-gray-400" />
              <textarea placeholder="Message" rows={4} className="w-full rounded bg-white/10 p-2 text-white placeholder-gray-400" />
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Leonardo Ivan Ransford. All rights reserved.
      </footer>
    </div>
  )
}
