import RenderSong from "../features/songs/RenderSong";

const SongInfoScreen = ({ route }) => {
  const { song } = route.params;
  return <RenderSong song={song} />;
};

export default SongInfoScreen;
