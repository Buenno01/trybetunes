import { ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode,
};
function Wrapper({ children }:WrapperProps) {
  return (
    <div
      className="flex flex-wrap container justify-center
      items-center gap-4 sm:justify-center sm:mx-auto
      md:max-w-4xl lg:max-w-5xl"
    >
      {children}
    </div>
  );
}

export default Wrapper;
