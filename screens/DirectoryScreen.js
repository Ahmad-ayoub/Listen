import { FlatList } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { useState } from "react";
import { SONGS } from "../shared/songs";

const DirectoryScreen = ({ navigation }) => {
  const [songs, setSongs] = useState(SONGS);
  const renderDirectoryItem = ({ item: song }) => {
    return (
      <ListItem onPress={() => navigation.navigate("SongInfoScreen", { song })}>
        <Avatar source={song.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{song.name}</ListItem.Title>
          <ListItem.Subtitle>{song.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={songs}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
