import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "Node.js", level: 65 },
  { name: "SQL / Database", level: 70 },
  { name: "Git & GitHub", level: 80 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 surface-elevated" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">My Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
              whileHover={{ x: 5 }}
            >
              <motion.div className="flex justify-between mb-2">
                <motion.span
                  className="font-medium text-sm group-hover:gradient-text transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.08 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
              <div className="h-3 rounded-full bg-muted overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full gradient-bg relative"
                >
                  <motion.div
                    className="absolute inset-0 gradient-bg opacity-50"
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
