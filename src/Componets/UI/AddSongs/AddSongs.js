import React, { Component } from "react";
import { connect } from "react-redux";
import SongsList from "../SongsList/SongsList";
import * as actions from "../../../store/actions/index";

class AddSongs extends Component {
  state = {
    songName: "",
    clickedSongs: []
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ songName: value });
  };

  onSongAddHandler = (index) => {
    console.log("index", index);
    let clickedSongs = [...this.state.clickedSongs];
    console.log(clickedSongs.includes(index));

    if (!clickedSongs.includes(index)) {
      clickedSongs.push(index);
      this.setState({ clickedSongs: clickedSongs });
      this.props.onAddHandler(this.props.id, index, this.props.songs);
    }
  };

  render() {
    let songsList = null;
    if (this.state.songName) {
      songsList = songsList = this.props.songs.slice(11, 30).filter((x) => {
        return x.title.includes(this.state.songName);
      });
    } else {
      songsList = this.props.songs.slice(11, 30);
    }
    let songsGroup = null;
    songsGroup = songsList.map((song) => (
      <SongsList
        key={song.id}
        id={song.id}
        url={song.url}
        title={song.title}
        content={
          this.state.clickedSongs.includes(song.id) ? "Added" : "Add To List"
        }
        clicked={() => this.onSongAddHandler(song.id)}
      />
    ));

    return (
      <div>
        <div>
          <input
            placeholder="Search a song to add"
            onChange={this.onChangeHandler}
          />
        </div>
        <div>{songsGroup}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.allSongs.songs,
    id: state.playList.listIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddHandler: (id, index, data) =>
      dispatch(actions.addSongToPlayList(id, index, data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);
