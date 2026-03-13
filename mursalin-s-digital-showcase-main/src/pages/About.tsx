import { motion } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "CSE Student", desc: "Pursuing B.Sc. in Computer Science & Engineering" },
  { icon: Code, title: "Developer", desc: "Full-stack development with modern technologies" },
  { icon: BookOpen, title: "Lifelong Learner", desc: "Always exploring new tools and frameworks" },
];

const About = () => {
  const ref = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">About Me</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Design with Intent.{" "}
            <span className="gradient-text">Create with Impact.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Md. Mursalin, a passionate Computer Science & Engineering student with a deep
              fascination for building software that solves real-world problems. My journey into
              tech was sparked by a curiosity for how things work behind the screen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From web development to algorithms, I love exploring every facet of computer science.
              I believe in writing clean, maintainable code and creating user experiences that are
              both beautiful and functional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my learning journey with the community.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-4 p-6 rounded-2xl surface-elevated border border-border hover:border-primary/30 transition-all duration-300 group hover:glow cursor-pointer overflow-hidden relative"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                />
                <motion.div
                  className="p-3 rounded-xl gradient-bg text-primary-foreground shrink-0 relative"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon size={24} />
                </motion.div>
                <div className="relative z-10">
                  <motion.h3
                    className="font-display text-lg font-semibold mb-1 group-hover:gradient-text transition-all duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100+", label: "Happy Users" },
            { number: "3+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl surface-elevated border border-border"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <motion.div
                className="font-display text-4xl font-bold gradient-text mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
