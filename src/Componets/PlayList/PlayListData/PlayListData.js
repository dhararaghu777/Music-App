import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./PlayListData.module.css";
import * as actions from "../../../store/actions/index";

class PlayListData extends Component {
  componentDidMount() {
    // this.props.onClickPlayList(this.props.id);
  }

  render() {
    return (
      <div className={classes.PlayListData} onClick={this.props.clicked}>
        <div className={classes.Name}>{this.props.name}</div>
        <div className={classes.Content}>Created At</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPlayList: (id) => dispatch(actions.addToList(id))
  };
};

export default connect(null, mapDispatchToProps)(PlayListData);
