import React, { useState } from "react";

const FileExplore = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  console.log(folderData);
  return (
    <div className="container">
      <h5>
        {" "}
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span onClick={handleClick}>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => {
          return <FileExplore key={index} folderData={childData} />;
        })}
    </div>
  );
};

export default FileExplore;
