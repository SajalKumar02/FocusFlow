import React from "react";
import { PanelRightClose } from "lucide-react";
import { PanelRightOpen } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b border-slate-200">
      <h1 className="text-xl font-bold tracking-tight text-slate-800">
        MyTasks
      </h1>
      <button className="ml-2 p-2 rounded-xl transition-all hover:bg-slate-200 active:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
        <PanelRightOpen />
      </button>
    </div>
  );
};

export default Header;
