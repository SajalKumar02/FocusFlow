import React from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import PresetListsSection from "./ListSection/PresetListsSection.jsx";
import ListSection from "./ListSection/ListSection.jsx";
import Footer from "./Footer";

const SideBar = ({
  expanded,
  onToggle,
  selectedList,
  handleSetSelectedList,
}) => {
  return (
    <aside
      className={`flex flex-col h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 border-r border-slate-200 shadow-xl backdrop-blur-lg transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      {/* Header - pass expanded/onToggle for button control */}
      <Header expanded={expanded} onToggle={onToggle} />

      {/* Optionally hide/show content based on expanded */}
      {/* Search Bar (show only if expanded) */}
      <SearchBar expanded={expanded} onToggle={onToggle} />

      {/* Tasks Section */}
      <PresetListsSection
        expanded={expanded}
        selectedList={selectedList}
        handleSetSelectedList={handleSetSelectedList}
      />

      {/* Lists Section */}
      <ListSection
        expanded={expanded}
        selectedList={selectedList}
        handleSetSelectedList={handleSetSelectedList}
      />

      {/* Footer Actions (show only if expanded) */}
      <Footer expanded={expanded} />
    </aside>
  );
};

export default SideBar;
