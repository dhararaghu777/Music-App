import React, { Component } from "react";
import { connect } from "react-redux";
import PlayListData from "./PlayListData/PlayListData";
import * as actions from "../../store/actions/index";
import classes from "./PlayList.module.css";

class PlayList extends Component {
  clickhandler = (id) => {
    this.props.openListData(id);
    this.props.onClickPlayList(id);
    this.props.history.push("/playlist/list");
  };

  render() {
    let playListGroup = null;
    playListGroup = this.props.totalList.map((x, id) => {
      return (
        <PlayListData
          key={id}
          name={`PlayList ${id + 1}`}
          songs={x}
          index={id}
          clicked={() => this.clickhandler(id)}
        />
      );
    });
    // console.log("PlayListGroup",playListGroup);

    return (
      <div className={classes.PlayList}>
        <div>{playListGroup}</div>
        <div>
          <button
            className={classes.button}
            onClick={this.props.onCreateNewPlayList}
          >
            Create PlayList
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.allSongs.songs,
    totalList: state.playList.totalSongs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadingHandler: (data) => dispatch(actions.addToPlayList(data)),
    openListData: (id) => dispatch(actions.openListData(id)),
    onClickPlayList: (id) => dispatch(actions.addToList(id)),
    onCreateNewPlayList: () => dispatch(actions.createNewPlayList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
