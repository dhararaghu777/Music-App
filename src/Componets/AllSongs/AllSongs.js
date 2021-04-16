import React, { useEffect, useState } from "react";
import SongsList from "./SongsList/SongsList";
import { connect } from "react-redux";

const AllSongs = (props) => {
  const [currentState, setState] = useState({
    songName: ""
  });

  const [currentSongs, setCurrentSongs] = useState({
    songsList: props.songs
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ songName: value });
    //console.log(currentState.songName);
  };

  useEffect(() => {
    console.log("useEffect2");
    let songsList = props.songs;

    if (currentState.songName) {
      songsList = props.songs.filter((song) => {
        return song.title.includes(currentState.songName);
      });
    }
    setCurrentSongs({ songsList: songsList });
  }, [currentState]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <input type="text" onChange={changeHandler} placeholder="Search song" />
      </div>
      <SongsList songs={currentSongs.songsList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.allSongs.songs
  };
};

export default connect(mapStateToProps)(AllSongs);
