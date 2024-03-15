import Footer from '@/components/layout/Footer';
import eases from '@/utils/eases';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const motionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 /* Corresponds to the delay in _app.tsx/handleExitComplete() */,
      duration: 0.5,
      ease: eases.outQuart,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.15,
      ease: eases.linear,
    },
  },
};

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div initial='initial' animate='animate' exit='exit' variants={motionVariants}>
      {children}
      <Footer />
    </motion.div>
  );
}
