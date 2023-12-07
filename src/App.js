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
  const [menuOption, setMenuOption] = useState("fast");
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    console.log("newVideo", newVideo);
    setMenuOption(newVideo);
    setSrc(VIDEOS[newVideo]);
  };

  return (
    <div>
      <h1>Video Player</h1>
      <Menu selected={menuOption} onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}

export default App;
