import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';

const Landing: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden w-auto flex flex-col bg-gray-900 items-center justify-around">
      <motion.h1 
        className="text-gray-300 text-center font-bold md:text-5xl text-4xl"
        transition={{
          type: 'tween',
          duration: 0.8,  
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        layoutId="main-header"
      >
        Framer motion and tailwind
      </motion.h1>

      <Link href="/home">
        <motion.a
          transition={{
            duration: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-700 py-6 px-12 cursor-pointer transition duration-500 rounded-3xl hover:bg-green-600 text-xl md:text-2xl font-medium text-gray-300"
        >
          More
        </motion.a>
      </Link>
    </div>
  );
}

export default Landing;