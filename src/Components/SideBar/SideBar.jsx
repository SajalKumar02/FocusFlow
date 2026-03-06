import React from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskSection from "./TaskSection";
import ListSection from "./ListSection";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <aside className="flex flex-col h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 border-r border-slate-200 shadow-xl backdrop-blur-lg">
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar />

      {/* Tasks Section */}
      <TaskSection />

      {/* Lists Section */}
      <ListSection />

      {/* Footer Actions */}
      <Footer />
    </aside>
  );
};

export default SideBar;
