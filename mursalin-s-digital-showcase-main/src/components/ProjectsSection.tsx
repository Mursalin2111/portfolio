import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with product management, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool with drag-and-drop task boards, real-time collaboration, and analytics.",
    tags: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, forecasts, and location-based alerts.",
    tags: ["JavaScript", "API", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border surface-elevated p-8 hover:border-primary/40 transition-all duration-500 hover:glow overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-3 mb-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.2 }}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 + 0.4 }}
                >
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
