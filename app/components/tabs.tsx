import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* Tab Buttons */}
      <div
        id="tab-buttons"
        className="flex dark:bg-[#16102B] bg-[#EAF5FF] rounded-full p-2"
      >
        {tabData.map((tab, index) => (
          <a
            key={index}
            href="javascript:void(0)"
            onClick={() => changeTab(index)}
            className={`inline-block px-8 py-3 ${
              activeTab === index
                ? "bg-transparent text-[#111827] dark:text-[#E4E4E4] rounded-full border-[#AE8FF7] border-[1px]"
                : "text-[#111827] dark:text-[#E4E4E4]"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Tab Panels */}
      <div id="tab-panels" className="bg-transparent py-6">
        {tabData.map((tab, index) => (
          <div key={index} className={`${activeTab !== index && "hidden"}`}>
            {tab.content.map((paragraph, idx) => (
              <p key={idx} className="dark:text-[#A8ADB3]">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

// Example data for tabs
const tabData = [
  {
    label: "Tab 1",
    color: "",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  {
    label: "Tab 2",
    color: "text-red-500",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  {
    label: "Tab 3",
    color: "text-purple-600",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
];

export default Tabs;
