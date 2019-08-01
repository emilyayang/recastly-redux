import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

const mapStateToProps = state => ({
  video: state.currentVideo
})
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    getVideo: video => dispatch(changeVideo(video))
  }
}
var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;

