import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden w-auto flex flex-col bg-gray-900">
      <div className="flex justify-between items-center py-2 md:py-6 px-4">
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 text-2xl cursor-pointer hover:text-white"
          >
            <FiArrowLeft />
          </motion.a>
        </Link>
          
        <motion.h1 
          className="text-gray-300 text-left md:text-3xl text-xl"
          layoutId="main-header"
        >
          Framer motion and tailwind
        </motion.h1>

      </div>
    </div>
  );
}

export default Home;