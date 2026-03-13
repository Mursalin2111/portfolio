import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "CSE Student", desc: "Pursuing B.Sc. in Computer Science & Engineering" },
  { icon: Code, title: "Developer", desc: "Full-stack development with modern technologies" },
  { icon: BookOpen, title: "Lifelong Learner", desc: "Always exploring new tools and frameworks" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Design with Intent.{" "}
            <span className="gradient-text">Create with Impact.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Md. Mursalin, a passionate Computer Science & Engineering student with a deep
              fascination for building software that solves real-world problems. My journey into
              tech was sparked by a curiosity for how things work behind the screen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From web development to algorithms, I love exploring every facet of computer science.
              I believe in writing clean, maintainable code and creating user experiences that are
              both beautiful and functional.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
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
      </div>
    </section>
  );
};

export default AboutSection;
