import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LinkWithIconProps = {
  activeIcon: ReactNode,
  nonactiveIcon: ReactNode,
  text: string,
  path: string,
};

function LinkWithIcon({ activeIcon, nonactiveIcon, path, text }: LinkWithIconProps) {
  return (
    <NavLink
      className="w-full flex justify-center
      border-b border-gray-600 py-3 gap-2"
      data-testid="link-to-search"
      to={ path }
    >
      <div className="group text-2xl">
        <span className="starts-visible">
          {nonactiveIcon}
        </span>
        <span className="starts-hidden">
          {activeIcon}
        </span>
      </div>
      <p className="hidden sm:inline">
        {text}
      </p>
    </NavLink>
  );
}

export default LinkWithIcon;
