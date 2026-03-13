import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";
import TypingText from "@/components/TypingText";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl font-bold leading-tight mb-2"
            >
              Md. Mursalin
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-3xl md:text-4xl font-semibold mb-6"
            >
              <TypingText
                words={["CSE Student", "Full-Stack Developer", "Tech Enthusiast", "Problem Solver"]}
                className="gradient-text"
                cursorClassName="gradient-text"
                typingSpeed={70}
                deletingSpeed={35}
                delayBetweenWords={2000}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed"
            >
              Passionate about building elegant software solutions and exploring the frontiers of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <motion.button
                onClick={() => navigate("/about")}
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 gradient-bg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  Learn More
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full font-medium border border-border hover:border-primary transition-colors relative group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 gradient-bg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Download CV</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: "github", href: "https://github.com" },
                { icon: "linkedin", href: "https://linkedin.com" },
                { icon: "mail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=mursalinhossan86@gmail.com" },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full surface-elevated hover:bg-accent hover:text-accent-foreground transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 gradient-bg rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-xl">{icon === "github" ? "🔗" : icon === "linkedin" ? "💼" : "✉️"}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <img
                src={profileImg}
                alt="Md. Mursalin"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-border shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
