import React from "react";
import {
  PanelRightClose,
  PanelRightOpen,
  ListTodo,
} from "lucide-react";

const Header = ({ expanded, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-5 border-b border-slate-200 relative">
      {expanded ? (
        <h1 className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
          <ListTodo size={28} className="mr-1" />
          MyTasks
        </h1>
      ) : (
        // Show only an icon (a todo list) when collapsed
        <span className="text-slate-800 flex justify-center w-full">
          <ListTodo size={28} />
        </span>
      )}
      {expanded ? (
        <button
          className="absolute top-1/2 right-[-16px] transform -translate-y-1/2 bg-white shadow-md border border-slate-200 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-slate-200 active:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 z-10"
          onClick={onToggle}
          aria-label="Collapse sidebar"
          style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)" }}
        >
          <PanelRightOpen size={18} />
        </button>
      ) : (
        <button
          className="absolute top-1/2 right-[-16px] transform -translate-y-1/2 bg-white shadow-md border border-slate-200 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-slate-200 active:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 z-10"
          onClick={onToggle}
          aria-label="Expand sidebar"
          style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)" }}
        >
          <PanelRightClose size={18} />
        </button>
      )}
    </div>
  );
};

export default Header;
