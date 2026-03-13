import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  amount?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  amount = 40,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === "up" && { y: amount }),
      ...(direction === "down" && { y: -amount }),
      ...(direction === "left" && { x: amount }),
      ...(direction === "right" && { x: -amount }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
