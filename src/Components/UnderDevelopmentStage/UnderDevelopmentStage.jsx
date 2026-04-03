import React from "react";

import { Clock } from "lucide-react";

const UnderDevelopmentStage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl max-w-md mx-auto mt-10 p-8">
      <h1 className="font-montserrat text-3xl text-gray-800 mb-2 tracking-wide">
        Settings
      </h1>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-teal-200 mb-4">
        <Clock size={32} strokeWidth={2} color="#374151" />
      </div>
      <p className="font-serif text-gray-600 bg-white/70 px-5 py-3 border border-gray-200 rounded-lg text-lg text-center mb-1">
        <em>
          These features are <strong>under development</strong>.
        </em>
      </p>
      <span className="text-sm text-gray-400 font-mono">
        Please check back soon!
      </span>
    </div>
  );
};

export default UnderDevelopmentStage;
