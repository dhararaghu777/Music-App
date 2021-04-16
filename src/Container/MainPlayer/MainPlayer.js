import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import AllSongs from "../../Componets/AllSongs/AllSongs";
import PlayList from "../../Componets/PlayList/PlayList";
import ListData from "../../Componets/PlayList/PlayListData/ListData/ListData";
import AddSongs from "../../Componets/UI/AddSongs/AddSongs";
import * as actions from "../../store/actions/index";

import classes from "./MainPlayer.module.css";

const MainPlayer = (props) => {
  // console.log("Props", props);
  useEffect(() => {
    console.log("Second Rendering");
    let songsList = [];
    const list1 = props.songs.slice(0, 5);
    const list2 = props.songs.slice(0, 5);
    songsList.push(list1);
    songsList.push(list2);
    console.log("Total Songs", props.songs);
    props.onLoadingHandler(songsList);
  }, []);

  return (
    <div className={classes.MainPlayer}>
      <div className={classes.Div}>
        <nav>
          <li>
            <NavLink
              to="/"
              activeClassName={
                props.location.pathname === "/" ? classes.active : null
              }
            >
              All Songs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              activeClassName={
                props.location.pathname.includes("/playlist")
                  ? classes.active
                  : null
              }
            >
              PlayList
            </NavLink>
          </li>
        </nav>
      </div>
      <div className={classes.ContentDiv}>
        <Switch>
          <Route exact path="/playlist" component={PlayList} />
          <Route exact path="/playlist/list" component={ListData} />
          <Route exact path="/playlist/list/add-song" component={AddSongs} />
          <Route path="/" component={AllSongs} />
        </Switch>
      </div>
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
    onLoadingHandler: (data) => dispatch(actions.addToPlayList(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainPlayer)
);
