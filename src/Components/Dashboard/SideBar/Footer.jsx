import React from "react";
import {
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
} from "lucide-react";
import { Link } from "react-router";

const Footer = ({ expanded }) => {
  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="px-5 pb-6 flex flex-col gap-2 mt-4 border-t border-slate-200 pt-5">
      <Link
        to="/settings"
        className={`flex items-center ${
          expanded ? "px-3 py-2" : "justify-center p-2"
        } rounded-lg transition-all hover:bg-slate-200/70 text-slate-600 font-semibold text-base group`}
        tabIndex={0}
        aria-label="Settings"
      >
        <SettingsIcon
          className={`w-5 h-5 ${expanded ? "mr-3" : ""} text-slate-400 group-hover:text-blue-500`}
          strokeWidth={2}
        />
        {expanded && <span>Settings</span>}
      </Link>
      <button
        className={`flex items-center ${
          expanded ? "px-3 py-2" : "justify-center p-2"
        } rounded-lg transition-all hover:bg-red-50/80 text-slate-600 font-semibold text-base group`}
        onClick={handleSignOut}
      >
        <LogOutIcon
          className={`w-5 h-5 ${expanded ? "mr-3" : ""} text-slate-400 group-hover:text-red-500`}
          strokeWidth={2}
        />
        {expanded && <span>Sign Out</span>}
      </button>
    </div>
  );
};

export default Footer;
