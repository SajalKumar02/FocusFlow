import React from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import PresetListsSection from "./PresetListsSection.jsx";
import ListSection from "./ListSection/ListSection.jsx";
import Footer from "./Footer";

const SideBar = ({
  expanded,
  onToggle,
  selectedList,
  handleSetSelectedList,
  filteringString,
  handleSetFilteringString,
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header - pass expanded/onToggle for button control */}
      <Header expanded={expanded} onToggle={onToggle} />

      <SearchBar
        selectedList={selectedList}
        expanded={expanded}
        onToggle={onToggle}
        filteringString={filteringString}
        handleSetFilteringString={handleSetFilteringString}
      />

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
    </div>
  );
};

export default SideBar;
