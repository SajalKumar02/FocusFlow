import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="flex gap-2 items-center text-sm text-slate-500 hover:text-slate-900 focus:outline-none transition-colors duration-150 hover:bg-slate-100 rounded px-2 py-1"
      onClick={() => navigate('/')}
    >
      <ChevronLeft className="" size={20} />
      Back
    </button>
  );
};

export default BackButton;
