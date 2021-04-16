import React from "react";

import classes from "./SongsList.module.css";

const songsList = (props) => {
  let songsListData = null;
  if (props.songs) {
    songsListData = props.songs.map((song) => (
      <div key={song.id} className={classes.Songs}>
        <div className={classes.div1}>
          <img className={classes.image} src={song.url} alt="image" />
        </div>
        <div className={classes.div2}>
          <div>{song.title.slice(0, 10)}</div>
          <div>Singer Name</div>
          <div>Album Name</div>
        </div>
        <div className={classes.div3}>
          <p>Play</p>
        </div>
      </div>
    ));
  }

  return <div>{songsListData}</div>;
};

export default songsList;
