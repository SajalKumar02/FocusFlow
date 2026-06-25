import React from 'react';

import { Menu } from 'lucide-react';
import DateTimeHeader from './DateTimeHeader';

const Header = () => {
  return (
    <div className="flex flex-row items-center gap-4 px-2 border-b border-slate-200">
      <div className="flex ">
        <Menu size={24} />
      </div>

      <DateTimeHeader />
    </div>
  );
};

export default Header;
