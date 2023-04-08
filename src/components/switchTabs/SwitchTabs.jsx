import React, { useState } from "react";

import "./switchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, idx) => {
    setLeft(idx * 100);
    setTimeout(() => {
      setSelectedTab(idx);
    }, 300);

    onTabChange(tab, idx);
  };

  return (
    <div className="switching-tabs">
      <div className="tab-items">
        {data.map((tab, idx) => (
          <span
            key={idx}
            className={`tab-item ${selectedTab === idx ? "active" : ""}`}
            onClick={() => activeTab(tab, idx)}
          >
            {tab}
          </span>
        ))}
        <span className="moving-bg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
