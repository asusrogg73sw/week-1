"use client";

import { motion, useReducedMotion } from "motion/react";

export const MotionDiv = motion.div;

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
}: {
  children?: React.ReactNode;
  delay?: number;
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};