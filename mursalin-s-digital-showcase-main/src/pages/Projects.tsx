import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with product management, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "🛒",
  },
  {
    title: "Task Management App",
    description: "A productivity tool with drag-and-drop task boards, real-time collaboration, and analytics.",
    tags: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    image: "✓",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, forecasts, and location-based alerts.",
    tags: ["JavaScript", "API", "CSS"],
    github: "#",
    live: "#",
    image: "🌤️",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
    image: "🎨",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging platform with user authentication and encrypted messages.",
    tags: ["React", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
    image: "💬",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app to track workouts, nutrition, and health metrics with charts and analytics.",
    tags: ["React Native", "Firebase", "Charts"],
    github: "#",
    live: "#",
    image: "💪",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");

  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h1>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === tag
                  ? "gradient-bg text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border surface-elevated p-8 hover:border-primary/40 transition-all duration-500 hover:glow overflow-hidden flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Project Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {project.image}
                </motion.div>

                <motion.div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{project.description}</p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
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
                    <ExternalLink size={16} /> Live
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
