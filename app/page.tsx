import Image from "next/image"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">Sup</div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="transition-colors hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="transition-colors hover:text-primary">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container space-y-20 py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center py-12 text-center md:py-20">
          <div className="mb-6 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="h-[150px] w-[150px] object-cover"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Leonardo Ivan Ransford</h1>
          <h2 className="mb-6 text-xl text-muted-foreground">Web Developer</h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            I build beautiful, responsive websites and web applications using modern technologies.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4">
                Gua ivan lu diem gausa bacot
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I'm always
                looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="About me"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold">My Skills</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {["HTML & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Git"].map(
              (skill) => (
                <div
                  key={skill}
                  className="rounded-lg border bg-card p-6 text-center transition-colors hover:border-primary"
                >
                  <h3 className="font-medium">{skill}</h3>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary"
              >
                <div className="h-48 bg-muted">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project ${project}`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Project {project}</h3>
                  <p className="mb-4 text-muted-foreground">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="#" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold">Get In Touch</h2>
          <div className="mx-auto max-w-md">
            <div className="mb-8 flex flex-col gap-6">
              <a
                href="mailto:email@example.com"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                email@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                github.com/johndoe
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/johndoe
              </a>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
