import { ReactNode } from 'react';

type HeadlineProps = {
  headline: string,
  children?: ReactNode
};

function Headline({ headline, children = undefined }:HeadlineProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 mb-4">
      <h2 className="text-xl text-center font-bold">
        {headline}
      </h2>
      {children}
    </div>
  );
}

export default Headline;
