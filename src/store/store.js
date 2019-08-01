import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js'
import VideoListContainer from '../containers/VideoListContainer.js'

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
let initalState = {
  currentVideo: null,
  videoList: []
};

const store = createStore(rootReducer, initalState, applyMiddleware(thunk))

export default store