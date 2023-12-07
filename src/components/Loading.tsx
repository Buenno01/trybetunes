import React from 'react';
import { motion } from 'framer-motion';
import { VscLoading } from 'react-icons/vsc';

function Loading() {
  return (
    <div
      className="self-center text-sky-400 font-bold
      flex flex-col gap-3 items-center text-center"
    >
      Carregando...
      <motion.div
        className="w-fit h-fit text-6xl"
        animate={ { rotate: 360 } }
        transition={ { ease: 'linear', duration: 2, repeat: Infinity } }
      >
        <VscLoading />
      </motion.div>
    </div>
  );
}

export default Loading;
