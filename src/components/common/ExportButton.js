import React from "react";
import i18n from "./../../i18n/i18n";

const ExportButton = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div align="left">
      <button className="btn btn-success" onClick={handleClick}>
        {i18n.userTable.tableExportButton}
      </button>
    </div>
  );
};

export default ExportButton;
