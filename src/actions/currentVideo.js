var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'VIDEO_CHANGED',
    currentVideo: video
  }
});

export default changeVideo;
