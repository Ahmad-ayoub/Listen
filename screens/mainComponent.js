import { useState } from "react";
import { View } from "react-native";
import { SONGS } from "../shared/songs";
import DirectoryScreen from "../screens/DirectoryScreen";
import SongInfoScreen from "../screens/SongInfoScreen";

const Main = () => {
  const [songs, setSongs] = useState(SONGS);
  const [songID, setSongID] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen songs={songs} onPress={(songID) => setSongID(songID)} />;
      <SongInfoScreen song={songs.filter((song) => song.id === songID)[0]} />
    </View>
  );
};

export default Main;
