import React, { Component } from "react";
import { connect } from "react-redux";
import SongsList from "../../../UI/SongsList/SongsList";
import classes from "./ListData.module.css";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../store/actions/index";

class ListData extends Component {
  addSongHandler = () => {
    this.props.history.push("/playlist/list/add-song");
  };

  render() {
    let allSongs = [];
    // console.log("index element", this.props.songs);
    allSongs = this.props.songs.map((song) => (
      <SongsList
        key={song.id}
        id={song.id}
        url={song.url}
        title={song.title}
        content="Delete"
        clicked={() => this.props.onDeleteHandler(this.props.id, song.id)}
      />
    ));

    return (
      <div>
        <div className={classes.ListData}>
          <button
            className={classes.buttons}
            onClick={() => this.props.onShuffleHandler(this.props.id)}
          >
            Shuffle Play
          </button>
          <button className={classes.buttons} onClick={this.addSongHandler}>
            Add Song
          </button>
        </div>
        <div>{allSongs}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.playList.playListArray,
    id: state.playList.listIndex,
    totalSongs: state.playList.totalSongs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteHandler: (id, index) => dispatch(actions.deleteFromList(id, index)),
    onShuffleHandler: (id) => dispatch(actions.shuffleListData(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListData)
);
