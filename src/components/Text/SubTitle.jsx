import React from "react";

const SubTitle = ({ children, hover_title }) => {
  return <span title={hover_title && undefined}>{children}</span>;
};

export default SubTitle;
