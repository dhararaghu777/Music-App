import React from "react";

import classes from "./SongsList.module.css";

const songsList = (props) => {
  return (
    <div>
      <div key={props.id} className={classes.Songs}>
        <div className={classes.div1}>
          <img className={classes.image} src={props.url} alt="image" />
        </div>
        <div className={classes.div2}>
          <div>{props.title.slice(0, 10)}</div>
          <div>Singer name</div>
          <div>Album Name</div>
        </div>
        <div className={classes.div3}>
          <div>Play</div>
        </div>
        <div className={classes.div4}>
          <div onClick={props.clicked}>{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default songsList;
