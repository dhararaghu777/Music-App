import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import allSongsReducer from "./store/reducer/allSongsReducer";
import playListReducer from "./store/reducer/playListReducer";

const rootReducer = combineReducers({
  allSongs: allSongsReducer,
  playList: playListReducer
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<StrictMode>{app}</StrictMode>, rootElement);
