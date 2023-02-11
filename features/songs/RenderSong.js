import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderSong = ({ song }) => {
  if (song) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={song.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {song.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{song.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderSong;
