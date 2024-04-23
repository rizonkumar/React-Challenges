import React, { useEffect, useState } from "react";

const Tabs = (props) => {
  const { children } = props;

  const [tabsHeader, setTabsHeaders] = useState([]);
  // {title: tab content}
  const [contentMap, setContentMap] = useState({});
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    const headers = [];
    const map = {};

    React.Children.forEach(children, (element) => {
      console.log("Element", element);
      if (!React.isValidElement(element)) {
        return;
      }
      const { title } = element.props;
      headers.push(title);
      map[title] = element.props.children; // content
    });

    console.log("Headers", headers);

    console.log(children);

    console.log("Map", map);

    setTabsHeaders(headers); // Headers
    setContentMap(map);
    setActiveTab(headers[0]);
  }, [props, children]);

  const changeTab = (header) => {
    setActiveTab(header);
  };

  return (
    <div>
      <div className="headers">
        {tabsHeader.map((header) => {
          return (
            <button key={header} onClick={() => changeTab(header)}>
              {header}
            </button>
          );
        })}
      </div>
      {/* ["Home", "About"] */}
      <div>
        {" "}
        {Object.keys(contentMap).map((key, index) => {
          if (key === activeTab) {
            return <div key={index}>{contentMap[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Tabs;
