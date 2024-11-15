import clsx from 'clsx';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';


type HeaderProps = {
  logo: JSX.Element;
  navLinks: JSX.Element;
}

const Header = (
  {
    logo,
    navLinks,

  }: HeaderProps
) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={clsx(
        'relative flex items-center justify-between p-4 mx-2 bg-white border-b-2 border-b-gray-100',
      )}>
        {logo}
        <button className="text-3xl text-primary md:bg-transparent md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <AlignJustify />
        </button>
        <div className="hidden gap-4 text-lg font-medium lg:items-center lg:justify-end lg:w-1/2 text-primary lg:flex">
          {navLinks}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 pt-10 bg-white">
          <div className="absolute top-4 right-4">
            <button className="text-2xl text-primary" onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-lg font-medium text-primary">
            {navLinks}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

