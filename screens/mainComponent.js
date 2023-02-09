import { useState } from "react";
import { SONGS } from "../shared/songs";
import DirectoryScreen from "./DirectoryScreen";

const Main = () => {
  const [songs, setSongs] = useState(SONGS);

  return <DirectoryScreen songs={songs} />;
};

export default Main;
