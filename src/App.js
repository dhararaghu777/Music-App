import "./styles.css";
import MainPlayer from "./Container/MainPlayer/MainPlayer";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import axios from "axios";
import Spinner from "./Componets/Spinner/Spinner";

const App = (props) => {
  useEffect(() => {
    console.log("Initial Rendering");
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const newdata = res.data.slice(0, 30);
        console.log(newdata);
        props.onStart(newdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {props.songs.length !== 0 ? (
        <MainPlayer />
      ) : (
        <div className="loader">
          <Spinner />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    songs: state.allSongs.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStart: (songs) => dispatch(actions.addSongs(songs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
