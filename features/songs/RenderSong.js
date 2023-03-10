import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const RenderSong = (props) => {
  const { song } = props;
  if (song) {
    return (
      <Card style={styles.cardContainer}>
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
        <Icon
          name={props.isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.isFavorite
              ? console.log("Already set as a favorite")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
});

export default RenderSong;
