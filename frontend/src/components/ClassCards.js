import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import "./ClassCard.css";
import { useHistory } from "react-router-dom";
function ClassCard({ name, creatorName, creatorPhoto, id, style }) {
    const history = useHistory();
  const goToClass = () => {

        localStorage.setItem('id',id)
        const token = localStorage.getItem('id')
        console.log("Hi")
        console.log(token)
        history.push("/Assignment");
  };

  return (
    <div className="classCard" style={style} onClick={goToClass}>
      <div className="classCard__upper">
        <div className="classCard__className">{name}</div>
        <div className="classCard__creatorName">{creatorName}</div>
      </div>
      <div className="classCard__middle"></div>
      <div className="classCard__lower">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default ClassCard;