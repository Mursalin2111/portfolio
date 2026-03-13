import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 90, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React.js", level: 80, icon: "⚛️" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "C/C++", level: 70, icon: "🔧" },
  { name: "Node.js", level: 65, icon: "🚀" },
  { name: "SQL / Database", level: 70, icon: "💾" },
  { name: "Git & GitHub", level: 80, icon: "📦" },
  { name: "TypeScript", level: 75, icon: "📘" },
  { name: "MongoDB", level: 70, icon: "🍃" },
  { name: "Firebase", level: 65, icon: "🔥" },
  { name: "Tailwind CSS", level: 85, icon: "🎯" },
];

const categories = [
  {
    title: "Frontend",
    skills: ["HTML & CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "SQL / Database", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "C/C++", "API Development", "RESTful Services"],
  },
];

const Skills = () => {
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
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">My Skills</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Technologies I <span className="gradient-text">Work With</span>
          </h1>
        </motion.div>

        {/* Progress bars */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Proficiency Levels</h2>
          <div className="grid gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group"
                whileHover={{ x: 5 }}
              >
                <motion.div className="flex justify-between mb-2 items-center">
                  <motion.span
                    className="font-medium text-sm group-hover:gradient-text transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                  <motion.span
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
                <div className="h-3 rounded-full bg-muted overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: "easeOut" }}
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
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.15 }}
              className="p-8 rounded-2xl surface-elevated border border-border hover:border-primary/30 transition-all duration-300 group hover:glow"
              whileHover={{ y: -5 }}
            >
              <motion.h3
                className="font-display text-2xl font-bold mb-6 gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + catIndex * 0.15 + i * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="text-primary"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      ✓
                    </motion.span>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
