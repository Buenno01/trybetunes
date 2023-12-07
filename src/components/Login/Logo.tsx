import React from 'react';
import { IoHeadsetSharp } from 'react-icons/io5';

function Logo() {
  return (
    <span
      className="text-sky-400 text-9xl self-center mt-20
    text-center flex flex-col justify-center items-center w-60 h-60
    rounded-full bg-radient-circle-c from-[--sky-opacity-2]
    from-0% to-65%
    "
    >
      <IoHeadsetSharp />
      <span className="text-4xl text-white">
        TrybeTunes
      </span>
    </span>
  );
}

export default Logo;
