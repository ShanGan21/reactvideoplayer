import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Video from "./Video";
import Menu from "./Menu";
import videofast from "./media/react_video-fast.mp4";
import videoslow from "./media/react_video-slow.mp4";
import videocute from "./media/react_video-cute.mp4";
import videoeek from "./media/react_video-eek.mp4";


const VIDEOS = {
  fast: videofast,
  slow: videoslow,
  cute: videocute,
  eek: videoeek,
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };


 
  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}



export default App;
