import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: song }) => {
    return (
      <ListItem>
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
      data={props.songs}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
